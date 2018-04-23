//@flow
import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './index.css'
import '../../layouts/common.css';
import leftImg from '../../assets/download_pattern_left.png';
import rightImg from '../../assets/download_pattern_right.png';
import AppIcon_placeHolder from '../../assets/AppIcon_test.png';

type Props = {
  test: string,
  number: number,
}
type State = {}

export default  class Home extends Component<Props, State> {

    render() {
        return (
            <div className='Home'>
                <img className='Left' src={leftImg}></img>
                {this.remderContent()}
                <img className='Right' src={rightImg}></img>
            </div>
        )
    }

    remderContent() {
      return (
        <div className='Content'>
            <div className='Box'>
                <img className='item_1' src={AppIcon_placeHolder}/>
                <div className='item_2'>
                  <QRCode size={150} value="itms-services://?action=download-manifest&url=https://appdeliver.oss-cn-hangzhou.aliyuncs.com/plist/a9fdb849-91d5-4f49-90f1-1bff2f669d84-Info.plist"/>
                </div>
            </div>
            <div className='Name'>销售易CRM</div>
            <div className='Tip'>扫描二维码下载<br/>或用手机浏览器输入这个网址:  https://fir.im/iOSIngageEnp</div>
            <div className='HrLine Margin'/>
            <div className='Remark'>1801.4 (Build 1801.4.5) - 60.03 MB<br/>更新于: 2018-02-13 12:44</div>
            <div className='HrLine Margin'/>
            <div>
              <div className='SubTitle'>更新日志</div>
              <div className='SubDetail'>修复无签退时间的bug</div>
            </div>
            <div className='HrLine Margin'/>
            <div>
              <div className='SubTitle'>关联Jira问题</div>
              <div className='SubDetail'>
                <a className='UrlLink' href='http://jira.ingageapp.com/browse/FEEDBACK-7814'>FEEDBACK-7814</a>
              </div>

            </div>
          </div>
        );
    }
}
