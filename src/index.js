import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import "./Theme/variable.css";
import "./Theme/theme.css";
import "./Theme/theme";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "alertifyjs/build/css/alertify.css";
import 'react-datepicker/dist/react-datepicker.css';
import LoadingPage from './Assets/PageLoading/PageLoading';

const Login = lazy(() => import('./Pages/Login/Login'));
const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
  <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"></script>
<Router>
    <Suspense fallback={<div><LoadingPage size={15} color={"#59534C"}  /></div>}>
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/Login'  exact component={Login} />f
            <Route path='*' component={App} />
        </Switch>
    </Suspense>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
