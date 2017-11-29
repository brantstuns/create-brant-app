import React from 'react';
import PropTypes from 'prop-types';

export default function App(props) {
  return <div className="app">{props.children}</div>;
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
