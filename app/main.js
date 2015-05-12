'use strict';
var componenet = require('./component.js');
if (document.body) {
	document.body.appendChild(componenet());
}

var render1 = require('./modules/module2.js').do;
document.body.appendChild(render1());
