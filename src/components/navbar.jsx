import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <>
        <div className="navbar">
          <i className="fa-brands fa-pagelines navbar-logo"></i>
          <span>Habit Tracker</span>
          <span className="navbar-count">{this.props.navbarCount}</span>
        </div>
      </>
    );
  }
}

export default Navbar;
