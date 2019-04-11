import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStream, deleteStream } from '../../actions';
import Modal from '../modal';
import history from '../../history';

export class StreamDelete extends Component {
  
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    console.log(this.props);
  };

  handleDelete = () => {
    this.props.deleteStream(this.props.match.params.id)
  };

  renderActions() {
    return (
      <React.Fragment>
        <div onClick={this.handleDelete} className="ui approve primary negative button">Delete</div>
        <Link to="/" className="ui cancel button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if(!this.props.stream) {
      return 'Are you sure you want to delete this stream? This action cannot be undone.'
    }

    return (
      <React.Fragment>
        Are you sure you want to delete <b>{this.props.stream.title}</b>? This cannot be undone.
      </React.Fragment>
    )
  }

  render() {

    return (
        <Modal 
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id] 
  }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)
