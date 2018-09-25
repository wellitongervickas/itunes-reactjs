import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormDefault extends Component {

  handleSubmit(e) {
    e.preventDefault()

    let toValidate = []
    const elements = e.target.elements;
    const formObj = {};

    if (elements && elements.length) {

      for (let el of elements) {
        if (el && el.name) {
          formObj[el.name] = {
            name: el.name,
            value: el.value,
          }
        }

        if (el.validity) {
          toValidate.push(el);
        }
      }

    } else if (elements !== null) {

      toValidate.push(elements && elements.validity);
    } else {

      // Do Nothing
    }

    if (toValidate.every(item => item.validity.valid === true)) {
      this.props.onSubmit(e, formObj);
    }
  }

  renderForm() {

    const {
      formRef,
      formNoValidate,
      formClassName,
    } = this.props;

    const params = {
      name: formRef ,
      className: formClassName || '' ,
      ref: formRef ,
      noValidate: formNoValidate ,
      onSubmit: ( e => this.handleSubmit(e) ),
    }

    return React.createElement(
      'form',
      params,
      this.props.children && Array.isArray(this.props.children) ? this.props.children.map(item => item ) :  this.props.children
    );
  }

  render() {
    return this.renderForm()
  }
};

FormDefault.propTypes = {
  formNoValidate: PropTypes.bool,
  formRef: PropTypes.string.isRequired,
  formClassName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default FormDefault;
