//@flow
import React, { Component } from 'react';
import QRCode from 'qrcode.react';

type Props = {
  test: string,
  number: number,
}
type State = {}

export default  class Home extends Component<Props, State> {

    render() {
        return (
            <div>
                我是主页！
                <div>
                    <QRCode value="itms-services://?action=download-manifest&url=https://localhost:8181/fileDownload"/>
                </div>
            </div>
        )
    }
}
