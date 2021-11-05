import React, { Component } from "react";
import Logo from "./Logo";

import Logos from "../../../public/images/Gear.png";


class ComingSoon extends Component {
  state = {

    logo: {
      alt: "Spinning Gear",
      src: Logos,
      spinSpeed: "slow"
    }
    
  };

  
  changeLogoSpeed = () => {
    const logo = { ...this.state.logo };
    logo.spinSpeed = "fast";
    this.setState({ logo }, () => {
      setTimeout(() => {
        logo.spinSpeed = "slow";
        this.setState({ logo });
      }, 1000);
    });
  };

  render() {
    const {

      logo,

    } = this.state;

    return (
      <div className="background">
        
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        
      </div>
    );
  }
}

export default ComingSoon;
