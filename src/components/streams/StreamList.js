import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions';


import './streams.css';

export class StreamList extends Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="stream-actions">
          <Link to={ `/streams/edit/${stream.id}`} className="ui primary icon basic button">
            <i className="pencil alternate icon"></i>
          </Link>
          <Link to={ `/streams/delete/${stream.id}`} className="ui button icon negative basic">
            
            <i className="trash icon"></i>
            
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="stream-item" key={stream.id}>
          <div className="stream-thumb">
            <i className="video alternate icon large middle aligned"></i>
          </div>
          <div className="stream-content">
            <Link to={ `/streams/${stream.id}` } className="stream-content--title">{ stream.title }</Link>
            <div className="stream-content--description">{ stream.description }</div>
          </div>
          {this.renderAdmin(stream)}
        </div>

      )
    })
  }

  renderCreate() {
    if(this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    
    return (
      <div className="streams-container">
      <div className="streams-page-header">
        <div className="streams-page--title">
          <h2>List of Streams</h2>
        </div>
        <div className="streams-page--actions">
        { this.renderCreate() }
        </div>
      </div>
        
        { this.renderList() }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)
