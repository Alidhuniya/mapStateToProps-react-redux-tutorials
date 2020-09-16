import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
 
ReactDom.render(<React.StrictMode><Provider store={store}><App /> </Provider></React.StrictMode>, document.getElementById("root"));

