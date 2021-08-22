import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/scss/bootstrap.scss";
import "./index.scss";


// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
// const history = createBrowserHistory({ basename: baseUrl });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      {/* <ConnectedRouter history={history}> */}

      <Router>
        <App />
      </Router>
      {/* </ConnectedRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

