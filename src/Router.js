import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import Home from './components/Home';
import WorkoutSelect from './containers/WorkoutSelect';

const Routes = ({store}) => ( 
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/workouts" component={WorkoutSelect} />
      </div>
    </Router>
  </Provider>
)
;

export default Routes;
