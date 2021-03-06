//@flow
import React, {Component} from 'react';
import {Upload, Icon, message, Button} from 'antd';
import {Base64} from 'js-base64';
import EncBase64 from 'crypto-js/enc-base64';
import hamcSha1 from 'crypto-js/hmac-sha1';
import sha1 from 'crypto-js/sha1';
import fs from 'fs';
import JSZip from 'jszip';
import fetch from 'isomorphic-fetch';
import Promise from 'pinkie-promise';
import './index.css';

const Dragger = Upload.Dragger;

type Props = {
  name: string,
  multiple: bool,
  action: string,
  headers: any,
  data: any
}
type State = {
  action: string,
  OSSAccessKeyId: string,
  key: string,
  success_action_status: string,
  policy: string,
  Signature: string
}

export default class UploadBox extends Component<Props, State> {

  static defaultProps = {
    name: 'file',
    multiple: false,
    action: 'https://appdeliver.oss-cn-hangzhou.aliyuncs.com/',
    headers: {
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Methods': "POST"
    },
    data: {}
  }

  constructor() {
    super()
    this.state = {
      action: "",
      OSSAccessKeyId: "",
      key: "",
      success_action_status: "",
      policy: "",
      Signature: ""
    }
  }

  render() {
    let props = {
      ...this.props,
      action: this.state.action,
      data: {
        'OSSAccessKeyId': this.state.OSSAccessKeyId,
        'key': this.state.key,
        'success_action_status': this.state.success_action_status,
        'policy': this.state.policy,
        'Signature': this.state.Signature
      },
      beforeUpload: this.beforeUpload
    }
    return (<Dragger {...props} className='DraggerBox'>
      <div style={{
          padding: 50
        }}>
        <Button className='Button' type='primary'>
          <Icon type='upload'/>
          上传应用
        </Button>
        <p className="ant-upload-text">点击或拖拽App包到上传区域</p>
        <p className="ant-upload-hint">只支持单文件的上传，支持ipa或apk文件上传</p>
      </div>
    </Dragger>)
  }

  beforeUpload = (file : File) => {
    let obj = this.unzipHandler(file).then((infoPlsitFile : File) => {
      return this.plistUpload(infoPlsitFile)
    })
    return obj.then((data) => {
      console.log(data);
      this.setState({
        ...this.state,
        action: data["host"],
        OSSAccessKeyId: data["OSSAccessKeyId"],
        success_action_status: data["success_action_status"],
        policy: data["policy"],
        Signature: data["Signature"],
        key: data["key"]
      })
    })
  }

  unzipHandler = (file : File) => {
    let zip = new JSZip();
    return zip.loadAsync(file).then((zipObject) => {
      return zipObject.files
    }).then((files) => {
      console.log(files);
      for (var fileName in files) {
        if (fileName.indexOf(".app/Info.plist") >= 0 && files.hasOwnProperty(fileName)) {
          return fileName;
        }
      }
    }).then((fileName) => {
      return zip.file(fileName).async ('string')
    }).then((content) => {
      console.log('第一步结束！');
      return new File([content], 'Info.plist')
    }).catch(function(error) {
      console.log('error');
    });
  }

  plistUpload = (file : File) => {
    let data = new FormData();
    data.append('file', file);
    let options = {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      body: data
    }
    return fetch('/iOS/infoPlist', options).then((response) => {
      return response.json()
    }).then((body) => {
      return new Promise(function(resolve, reject) {
        if (body.scode == 0) {
          resolve(body.data)
        } else {
          reject(body.message)
        }
      });
    }).catch(function(error) {
      console.log('error');
    })
  }
}
