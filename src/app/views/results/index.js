import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../../../config';
import { TrackThumb } from '../../../components';

class Results extends Component {
  render() {

    const { searchResults } = this.props;
    const { texts, warnings } = config.lang;
    
    return (
      <div className="results container">
        <h2 className="mg-bottom-20">
          { texts.results }
          <small>({ searchResults && searchResults.length })</small>
        </h2>
        <div className="results-list grid grid-lg-4 grid-md-3 grid-sm-2 grid-xs-1">
          { searchResults && searchResults.length ?
            searchResults.map((item, index) => <TrackThumb key={ index } result={ item } /> ) : warnings.empty_list
          }
        </div>
        <div className="results-actions btn-control text-center mg-top-20 mg-bottom-20">
          <button
            className="btn"
            onClick={ () => this.props.history.goBack() }>
            { texts.back_to_home }
          </button>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  searchResults: state.search.searchResults,
});

export default connect(mapStateToProps, null)(Results);