//@flow
import React, { Component } from 'react';
import UploadBox from './UploadBox';
import '../../layouts/common.css';

type Props = {}
type State = {}


export default class UploadPage extends Component<Props, State> {
  render() {
    return (
      <div className='Page'>
        <div className='Title'>
          <span className='Left'>发布应用</span>
          <span>发布测试应用,仅需两步</span>
        </div>
        <div className='HrLine'></div>
        <UploadBox/>
      </div>
    )
  }
}
