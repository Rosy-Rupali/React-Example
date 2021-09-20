import React, { Component} from "react";

const Army = (Men, shots) => {
    class NewUser extends Component{
        constructor() {
            super();
            this.state = {
              gunshots: 0,
            };
          }
        
          handleGunshots = () => {
            this.setState({
              gunshots: this.state.gunshots + shots,
            });
          };
        render(){
            return(
                <Men hocgunName = 'Pistol' 
                    hocgunShots= {this.state.gunshots}
                    hochandleGunshots= {this.handleGunshots}
                    {...this.props}
                />
            )
        }
    }
    return NewUser;
}
export default Army;