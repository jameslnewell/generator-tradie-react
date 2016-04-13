import React from 'react';

export default function App(props) {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node.isRequired
};
