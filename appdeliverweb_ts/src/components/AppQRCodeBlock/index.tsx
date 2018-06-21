import * as QRCode  from "qrcode.react";
import * as React from "react";



class AppQRCodeBlock extends React.Component {
 public render () {
    return (
      <div>
        <image/>
        <QRCode value="哈哈哈啊哈哈啊哈"/>
      </div>
    );
  }
}

export default AppQRCodeBlock;
