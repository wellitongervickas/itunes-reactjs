import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class InputDefault extends Component {

  state = {
    validationMessage: null,
  }

  componentDidMount() {
    this.validateSubmit();
  }

  validateSubmit() {
    if (this.props.inputFor && this.refs[this.props.inputFor]) {

      // Get Submit Event From Parent Form
      let form = this.refs[this.props.inputFor].form;

      if (form) {
        form.addEventListener('submit', () => {
          if (this.refs[this.props.inputFor]) {

            this.setState({
              validationMessage: this.refs[this.props.inputFor].validationMessage ?
              this.refs[this.props.inputFor].validationMessage : null
            });

            this.validateField( this.refs[this.props.inputFor] )
          }
        })
      }
    }
  }

  validateField(el) {
    if (el) {
      if(!el.validity.valid) {
        ReactDOM.findDOMNode(el).classList.add('input-error');
        this.setState({ validationMessage: el.validationMessage });
      } else {
        ReactDOM.findDOMNode(el).classList.remove('input-error')
      }
    }
  }

  renderLabel() {
    if (this.props.inputLabel && this.props.inputType !== 'hidden') {

      return (
        <label className="input-default-label label" htmlFor={ this.props.inputFor }>
          { this.props.inputLabel }
          { this.props.inputRequired && <span className="required">*</span> }
        </label>
      )

    } else {

      return null;
    }
  }

  renderInput() {

    let params = {
      autoComplete: 'new-password',
      type: this.props.inputType || 'text',
      name: this.props.inputFor || '',
      ref: this.props.inputFor || '',
      id: this.props.inputFor || '',
      className: 'input-default-field',
      value: this.props.inputValue,
      onChange: e => {
        this.setState({ validationMessage: e.target.validationMessage })
        this.validateField( e.target )
        this.props.onChange( e.target.value )
      },
    }

    // Another Options
    if (this.props.inputDisabled) {
      params.disabled = this.props.inputDisabled;
      params.readOnly = this.props.hasOwnProperty('inputOnlyRead') ? this.props.inputOnlyRead : this.props.inputDisabled;
    }

    if (this.props.inputPattern) params.pattern = this.props.inputPattern;
    if (this.props.inputFocus) params.autoFocus = this.props.inputFocus;
    if (this.props.inputPlaceholder) params.placeholder = this.props.inputPlaceholder;
    if (this.props.inputRequired) params.required = this.props.inputRequired;
    if (this.props.inputMin) params.min = this.props.inputMin;
    if (this.props.inputMax) params.max = this.props.inputMax;
    if (this.props.inputMinLength) params.minLength = this.props.inputMinLength;
    if (this.props.inputMaxLength) params.maxLength = this.props.inputMaxLength;

    return React.createElement('input', params);
  }

  render() {
    return (
      <div className={ 'input-default ' + (this.props.inputAditionalClass ? this.props.inputAditionalClass : '') }>

        { this.renderLabel() }
        { this.renderInput() }

        {
          // When input required and need to show a message
          (this.state.validationMessage && this.props.inputShowMessage !== false) &&
          <span className="input-error-message animated fadeIn">
            { this.state.validationMessage }
          </span>
        }
      </div>
    )
  }
}

InputDefault.propTypes = {

  // Validations
  inputOnlyRead: PropTypes.bool,
  inputShowMessage: PropTypes.bool,
  inputDisabled: PropTypes.bool,
  inputRequired: PropTypes.bool,
  inputPattern: PropTypes.string,

  // Titles
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,

  // Initial Status
  inputFocus: PropTypes.bool,
  inputAditionalClass: PropTypes.string,
  inputType: PropTypes.oneOf([
    'text',
    'number',
    'url',
    'email',
    'password',
    'search',
    'date',
    'datetime-local',
    'hidden'
  ]),
  inputValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, ]).isRequired,
  inputFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputDefault;
