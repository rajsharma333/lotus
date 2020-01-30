import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo"><img width="30px" height="30px" src={process.env.PUBLIC_URL + '/logo2.png'} />OBSIDIAN</div>
      {/*<div className="logo-fake"><img width="200px" src={process.env.PUBLIC_URL + '/logo.png'} /></div>*/}

      <div className="header-links">
        <a><i className="material-icons">notifications_none</i></a>
        <a className="ml10 mr20"><i className="material-icons">power_settings_new</i></a>
      </div>
    </header>
  )
}

export default Header;
