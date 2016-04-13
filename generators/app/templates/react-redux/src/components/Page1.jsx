import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

export function handleClick(dispatch) {
  dispatch(push('/page-2'));
}

export function Page1(props) {
  const {dispatch} = props;
  return (
    <div>
      <h2>Page #1</h2>
      <p>Hello World!</p>
      <button onClick={() => handleClick(dispatch)}>Go to Page #2</button>
    </div>
  );
}

Page1.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(Page1);
