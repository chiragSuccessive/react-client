import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {
  Login,
  Trainee,
  TraineeList,
  TraineeDetail,
  TextFieldDemo,
  InputDemo,
  ComponentDemo,
  NoMatch,
} from './pages';
import { AuthRoute, PrivateRoute } from './routes';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <AuthRoute path="/login" component={Login} />
        <PrivateRoute exact path="/trainee" component={TraineeList} />
        <PrivateRoute exact path="/trainee/:id" component={TraineeDetail} />
        <PrivateRoute exact path="/text-field" component={TextFieldDemo} />
        <PrivateRoute path="/input-demo" component={InputDemo} />
        <PrivateRoute path="/children-demo" component={ComponentDemo} />
        <PrivateRoute component={NoMatch} />
      </Switch>
    </Router>
  </>
);

export default App;
