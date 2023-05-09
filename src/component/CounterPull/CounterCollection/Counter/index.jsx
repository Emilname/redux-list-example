import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CounterBody from './CounterBody';
import bindIdToActionCreators from '../store/bindIdToActionCreators';
import { incrementAction, decrementAction } from '../store/counterReducer';

const Counter = (props) => (
  <div className={'redux' + (props.counter.warning ? ' warning' : '')}>
    <h1>{props.counter.value}</h1>
    {/* <CounterBody /> */}
    <button onClick={props.incrementAction}>+</button>
    <button onClick={props.decrementAction}>-</button>
  </div>
);

const mapDispatchToProps = (dispatch, { id }) =>
  bindActionCreators(bindIdToActionCreators({ incrementAction, decrementAction }, id), dispatch);
export default connect(null, mapDispatchToProps)(Counter);

