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
                <img src={leftImg}></img>
                <div className='Box'>
                    <img className='item_1' src={AppIcon_placeHolder}/>
                    <QRCode className='item_2' size={200} value="itms-services://?action=download-manifest&url=https://localhost:8181/fileDownload"/>
                </div>
                <img src={rightImg}></img>
            </div>
        )
    }
}
