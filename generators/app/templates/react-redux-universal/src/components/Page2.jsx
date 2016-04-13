import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

export function handleClick(dispatch) {
  dispatch(push('/page-1'));
}

export function Page2(props) {
  const {dispatch} = props;
  return (
    <div>
      <h2>Page #2</h2>
      <p>Hello World!</p>
      <button onClick={() => handleClick(dispatch)}>Go to Page #1</button>
    </div>
  );
}

Page2.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(Page2);
