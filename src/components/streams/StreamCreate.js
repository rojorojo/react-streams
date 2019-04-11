import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

import './streams.css';

export class StreamCreate extends Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {

    return (
      <div className="streams-container">
        <h2>Create a Stream</h2>
        <StreamForm onSubmit={this.onSubmit} buttonMessage="Create" />
      </div>
    )
  }
}


export default connect(null, {createStream})(StreamCreate);
