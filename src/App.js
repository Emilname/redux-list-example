import React, { Component } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from "./reducer";
import CounterPull from "./component/CounterPull";

const store = createStore(reducer, composeWithDevTools());
window.store = store;
// root component cannot be stateless functional components
// see: https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
// #the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterPull />
      </Provider>
    );
  }
}

