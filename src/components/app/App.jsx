import React from 'react';
import VampireDiariesContainer from '../../containers/VampireDiariesContainer';

export default function App() {
  return
  <Router>
    <Switch>
      <Route path='/:id'>
        <VampireDiariesDetails />
      </Route>
<Route path='/'>
        <VampireDiariesDetails />
      </Route>
      </Switch>
</Router>
}
