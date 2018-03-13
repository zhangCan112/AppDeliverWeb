//@flow
import React, { Component } from 'react';
import UploadBox from './UploadBox';
import '../../layouts/common.css';
import {Input} from 'antd';

type Props = {}
type State = {
  jiras: string[]
}


export default class UploadPage extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      jiras: []
    }
  }
  render() {
    return (
      <div className='Page'>
        <div className='Title'>
          <span className='Left'>发布应用</span>
          <span>发布测试应用,仅需两步</span>
        </div>
        <div className='HrLine'></div>
      <div className='Step'>第一步：上传App包</div>
        <UploadBox/>
      <div className='Step'>第二步：关联Jira问题</div>
        {this.renderJiraList()}
      </div>
    )
  }
  renderJiraList(){

    return (
      <div className='JiraListBox'>
        <span className='JiraText'><Input placeholder='测试'/></span>
        <span className='JiraIcon'>123</span>
      </div>
    )
  }
}
