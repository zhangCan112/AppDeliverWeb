import * as QRCode  from "qrcode.react";
import * as React from "react";

interface Props {
  imgSrc: string,
  qrValue: string,
}

class AppQRCodeBlock extends React.Component<Props> {
 public render () {
    return (
      <div>
        <img src={this.props.imgSrc}/>
        <QRCode value={this.props.qrValue}/>
      </div>
    );
  }
}

export default AppQRCodeBlock;
