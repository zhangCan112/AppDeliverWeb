//@flow
import React, { Component } from 'react';
import QRCode from 'qrcode.react';
export default  class Home extends Component {
    render() {
        return (
            <div>
                我是主页！
                <div>
                    <QRCode value="我是主页！"/>
                </div>
            </div>
        )
    }
}