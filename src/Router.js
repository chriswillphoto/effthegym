import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import WorkoutSelect from "./containers/WorkoutSelect";
import WorkoutEditor from "./containers/WorkoutEditor";
import WorkoutRunner from "./containers/WorkoutRunner";
import ExerciseList from "./components/ExerciseList";

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/workouts" component={WorkoutSelect} />
          <Route exact path="/workout/edit" component={WorkoutEditor} />
          <Route exact path="/workout/run" component={WorkoutRunner} />
          <Route exact path="/exercises" component={ExerciseList} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Routes;
