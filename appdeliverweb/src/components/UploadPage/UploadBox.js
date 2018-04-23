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

var policyText = {
  "expiration": "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
  "conditions": [
    ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
  ]
};
var policyBase64 = Base64.encode(JSON.stringify(policyText))

type Props = {
  name: string,
  multiple: bool,
  action: string,
  headers: any,
  data: any
}
type State = {}

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
  render() {
    let props = {
      ...this.props,
      data: {
        'OSSAccessKeyId': 'LTAIP46PMViRaQCJ',
        'key': 'zhangcan.app',
        'success_action_status': '200',
        'policy': policyBase64,
        'Signature': EncBase64.stringify(hamcSha1(policyBase64, 'T4eDGknsW2PBbDpQ9tcqTEks42tahs'))
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
    let promisefunc = (resolved, rejected) => {
      obj.then(() => {
        // rejected("我就是要报错！！！")
        resolved()
      }).catch(function(error) {
        console.log(error);
      });
    }
    return new Promise(promisefunc)
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
      console.log('第二步结束！');
      console.log(response.json())
      console.log('第二步结束！111');
      return false
    }).catch(function(error) {
      console.log('error');
    })
  }
}
