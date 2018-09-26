import React from 'react';
import { connect } from 'react-redux';
import LoadingSVG from '../../assets/images/app/loading.svg';

const Loading = props => (
  <div className={ (props.loadingStatus === true) ? 'loading' : 'hide' }>
    { props.loadingStatus === true &&
      <img src={ LoadingSVG } alt="Loading" />
    }
  </div>
);

const mapStateToProps = state => ({
  loadingStatus: state.loading.loadingStatus
});

export default connect(mapStateToProps, null)(Loading);
