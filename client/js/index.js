import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import '../styles/styles.scss';
import 'raf/polyfill';

ReactDOM.render(<Router/>, document.getElementById('appRender'));