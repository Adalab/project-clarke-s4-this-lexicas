import React, { Component } from 'react';
import logo from '../images/logoCv.png';


class Header extends Component {
  render() {
    return (
      <header>
      <img src={logo} alt="Logo" className="logo" />
      </header>

    );
  }
}

export default Header;
