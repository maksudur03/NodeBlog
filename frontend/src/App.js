import React from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './containers/DefaultLayout';
const Login = React.lazy(() => import('./views/pages/Login'));
const Register = React.lazy(() => import('./views/pages/Register'));
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    <HashRouter>
           <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
              {/* <Route path="/" name="Home" render={props => <Login {...props}/>} /> */}
            </Switch>
          </React.Suspense>
      </HashRouter>
  );
}

export default App;
