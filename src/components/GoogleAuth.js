import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../actions';

export class GoogleAuth extends Component {
  
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '421085137843-rja49o749au396n84pj06cuc7bbea3h0.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
    
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return <div><div className="donut-spinner"></div></div>
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderAuthButton() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
