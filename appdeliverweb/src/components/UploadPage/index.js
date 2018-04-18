//@flow
import React, {Component} from 'react';
import UploadBox from './UploadBox';
import '../../layouts/common.css';
import {Input, Button, Icon} from 'antd';

type Props = {}
type State = {
  jiras: string[]
}

export default class UploadPage extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      jiras: ['jira1', 'jira2']
    }
  }
  render() {
    return (<div className='Page'>
      <div className='Title'>
        <span className='Left'>发布应用</span>
        <span>
          <span>发布测试应用,仅需两步
          </span>
          <span>
            <Button type="primary">发布</Button>
          </span>
        </span>
      </div>
      <div className='HrLine'></div>
      <div className='Step'>第一步：上传App包</div>
      <UploadBox/>
      <div className='Step'>
        第二步：关联Jira问题
        <span className='JiraIcon'>
          <Button type="dashed" shape="circle" icon="plus"/>
        </span>
      </div>
      {this.renderJiraList()}
    </div>)
  }
  renderJiraList() {
    let jiras = this.state.jiras;
    if (jiras.length == 0) {
      jiras = [null];
    }

    return (<div className='JiraListBox'>
      {
        jiras.map((obj) => {
          return (<div className='Jira'>
            <span className='JiraText'><Input placeholder='请输入Jira链接' defaultValue={obj}/></span>
            {
              (jiras.length > 1) && (<span className='JiraIcon'>
                <Button type="dashed" shape="circle" icon="minus"/>
              </span>)
            }
          </div>);
        })
      }
    </div>)
  }
}
