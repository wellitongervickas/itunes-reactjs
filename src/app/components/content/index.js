import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { convertToArray } from '../../../model/helpers/list';
import config from '../../../config';

class Content extends Component {
  render() {

    const routesList = convertToArray(config.routesApp);
    
    return (
      <section>
        <main>
          <Switch ref="switch">
            { routesList.map((item, index) =>
              <Route
                key={ index }
                path={ item.path }
                exact={ item.exact }
                component={ item.main }
              />
            )}
          </Switch>
        </main>
      </section>
    )
  }
};

export default withRouter(Content);