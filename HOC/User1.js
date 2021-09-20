import React from "react";
import Army from "./WithArms";
class Cadet1 extends React.Component {
  render() {
    return (
      <div>
      <h3>Camp Number : {this.props.campNo} </h3>
        <h3 onMouseOver={this.props.hochandleGunshots}>
          Cadet1 {this.props.hocgunName} 
           Gunshots: {this.props. hocgunShots}
        </h3>
      </div>
    );
  }
}
export default Army(Cadet1, 2);
