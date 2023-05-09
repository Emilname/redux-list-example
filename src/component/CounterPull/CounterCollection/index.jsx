import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from './Counter';
import AddCounter from './AddCounter';
import { addCounter } from '../store/actions';

const CounterCollection = (props) => (
  <div className='container'>
    {Object.entries(props.counters).map(([id, value]) => (
      <Counter key={id} counter={value} id={id} />
    ))}
    <AddCounter addCounter={props.addCounter} />
  </div>
);

const mapStateToProps = (state) => ({
  counters: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addCounter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterCollection);

