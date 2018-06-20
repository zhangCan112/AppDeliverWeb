import * as React from "react";
import * as QRCode  from "qrcode.react";

class AppQRCodeBlock extends React.Component {
  render () {
    return (
      <div>
        <image/>
        <QRCode value="哈哈哈啊哈哈啊哈"/>
      </div>
    );
  }
}

export default AppQRCodeBlock;
