import React from 'react';
import './Header.css';
import logo from "./skc_logo.png";

export default function Header() {
  return (
    <header className="App-header">
      <img src={ logo } alt="SKC LOGO" />
      <h1 className="App-title">MARKET MAP</h1>
    </header>
  );
}
