import React from 'react';
import $ from 'jquery';
import './hello.css';

var style = {
  color: '#EEE'
};


export default class Hello extends React.Component {
  render() {
    return <div>
    <div className='col-xs-6 col-md-4'>
    <HelloWorld />
    </div>
    
    <div className='col-xs-12 col-md-8'>
    </div>
    <h1 className='tag_h1'>Hello world ^_^</h1>
    <h2 style={style}>Using inline styles instead of stylesheets</h2>
    </div>;
  }
}