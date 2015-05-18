import React from 'react';
import Hello from 'hello';
import './main.css';

main();

function main() {
    React.render(<Hello/>, document.getElementById('app'));
};