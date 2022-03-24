import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  const app = (
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  )

ReactDOM.render( app, document.getElementById('root'));
