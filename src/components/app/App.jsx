import React from 'react';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import HeyArnoldDetail from '../../containers/HeyArnoldDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return(
  <Router>
    <Switch>
      <Route path='/:id'>
        <HeyArnoldDetail />
      </Route>
        <Route path='/'>
        <HeyArnoldContainer />
      </Route>
      </Switch>
</Router>)
}
