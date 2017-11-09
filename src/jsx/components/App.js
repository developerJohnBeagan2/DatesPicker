// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import SamplePage from './sample/SamplePage'; //eslint-disable-line import/no-named-as-default
import { connect } from 'react-redux';

export const App = () => {
    return (
        <div className="container">

          <div className="jumbotron">
              <h1>Modal Dates Picker Sample</h1>
              <p className="lead">When a user must to pick several dates, and a larger control is needed.</p>
          </div>

            <Route exact path="/" component={SamplePage} />

        </div>
    );
};


App.propTypes = {
  match: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps)(App);
