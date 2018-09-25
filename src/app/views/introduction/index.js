import React, { Component } from 'react';
import { parseString } from '../../../model/helpers/translation';
import config from '../../../config';
import { Form, Input } from '../../../components';

export default class Introduction extends Component {

  state = {
    searchField: '',
  }

  submitForm() {
    console.log('submit')
  }
  
  render() {

    const { texts, placeholders } = config.lang;
    
    return (
      <div className="introduction">
        <div className="introduction-body flex flex-column-center">
          <h1 className="mg-bottom-20">{ parseString(texts.welcome_to, config.app.appName) }</h1>
          <Form
            formNoValidate={ true }
            formRef={ 'introduction-form' }
            formClassName="introduction-form"
            onSubmit={ () => this.submitForm() }>
            <div className="field-control">
              <Input
                inputRequired={ true }
                inputFor="search"
                inputPlaceholder={ placeholders.search_term }
                inputValue={ this.state.searchField }
                onChange={ searchField => this.setState({ searchField }) }
              />
            </div>
            <div className="btn-control mg-top-20">
              <button className="btn btn-primary">
                <span className="fas fa-search"></span>
                { texts.send }
              </button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
