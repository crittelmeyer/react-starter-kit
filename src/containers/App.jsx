import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReposPage from '../pages/ReposPage';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={ReposPage} />
      </Switch>
    </Fragment>
  );
}
