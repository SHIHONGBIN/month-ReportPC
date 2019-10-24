import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}  title={`10月份运营月报`}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
