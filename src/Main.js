import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Events from './pages/Event';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Register from './pages/Register';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='ISSA-dynamic/' component={Home}></Route>
      <Route exact path='ISSA-dynamic//' component={Events}></Route>
      <Route exact path='ISSA-dynamic///' component={Projects}></Route>
      <Route exact path='ISSA-dynamic////' component={Blog}></Route>
      <Route exact path='ISSA-dynamic/////' component={Register}></Route>
    </Switch>
  );
}

export default Main;