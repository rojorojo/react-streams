import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';


import './streams.css';

export class StreamForm extends Component {

  renderInput({input, label, meta: { touched, error }}) {
    console.log(error)
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} className={touched && error ? 'validation-error validation-input-error' : ''} />
        { touched && error && <div className="validation-error">{error}</div>}
      </div>
        
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {

    return (
      
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          type="text"
          label="Title"
          component={this.renderInput}
        />
        <Field 
          name="description" 
          type="text" 
          label="Description" 
          component={this.renderInput} 
        />
        <div>
          <button className="ui primary button" type="submit">
            {this.props.buttonMessage}
          </button>
        </div>
      </form>
      
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description';
  }

  return errors;

}

export default  reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);


