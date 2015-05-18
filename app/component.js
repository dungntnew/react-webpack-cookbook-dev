import React from 'react';
import './component.css';

var style = {
  color: '#EEE'
};

export default class Hello extends React.Component {
  render() {
    return <div>
    <h1 className='tag_h1'>Hello world ^_^</h1>
    <h2 style={style}>Using inline styles instead of stylesheets</h2>
    </div>;
  }
}