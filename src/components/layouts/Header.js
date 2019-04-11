import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth'
import logo from '../../assets/Logo.png';

export default function Header() {
  return (
    
        <header className="app-header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} className="app-logo" alt="logo" />
            </Link>
          </div>
          
          <div className="ui secondary menu nav">
            <div className="menu right">
              <Link to="/" className="item">
                All Streams
              </Link>
              <div className="item">
                <GoogleAuth />
              </div>
              
            </div>           
          </div>
        </header>
    
  )
}
