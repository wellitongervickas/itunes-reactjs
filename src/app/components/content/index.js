import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import { convertToArray } from '../../../model/helpers/list';
import config from '../../../config';

const routesList = convertToArray(config.routesApp);

const Content = () => (
  <section>
    <main>
      <Switch>
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
);

export default withRouter(Content);