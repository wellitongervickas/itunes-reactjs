import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../../../store/actions/search';

import config from '../../../config';
import { parseString } from '../../../model/helpers/translation';
import { Form, Input } from '../../../components';

class Introduction extends Component {

  state = {
    searchField: '',
  }

  submitForm() {
    this.props.searchTerm(this.state.searchField);
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
                inputFocus={ true }
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
};

const mapDispatchToProps = dispatch => bindActionCreators(searchActions, dispatch);

export default connect(null, mapDispatchToProps)(Introduction);