//@flow
import React, { Component } from 'react';
import {Upload, Icon, message, Button} from 'antd';
import './index.css';
const Dragger = Upload.Dragger;


type Props = {}
type State = {}


export default class UploadBox extends Component<Props, State> {
  render() {
    return (
      <Dragger className='DraggerBox'>
          <div style={{padding: 50}}>
            <Button className='Button' type='primary'>
              <Icon type='upload'/> 上传应用
            </Button>
            <p className="ant-upload-text">点击或拖拽App包到上传区域</p>
            <p className="ant-upload-hint">只支持单文件的上传，支持ipa或apk文件上传</p>
          </div>
      </Dragger>
    )
  }
}
