//@flow
import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './index.css'
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
                <div className='Content'>
                  <div className='Box'>
                      <img className='item_1' src={AppIcon_placeHolder}/>
                      <div className='item_2'>
                        <QRCode size={150} value="itms-services://?action=download-manifest&url=https://localhost:8181/fileDownload"/>
                      </div>
                  </div>
                  <div className='Name'>销售易CRM</div>
                  <div className='Tip'>扫描二维码下载<br/>或用手机浏览器输入这个网址:  https://fir.im/iOSIngageEnp</div>
                  <hr className='Line'/>
                  <div className='Remark'>1801.4 (Build 1801.4.5) - 60.03 MB<br/>更新于: 2018-02-13 12:44</div>                  
                </div>
                <img className='Right' src={rightImg}></img>
            </div>
        )
    }
}
