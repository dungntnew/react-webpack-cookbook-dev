//---- module2 ----

var util = require('./module1.js');
var component = require('../component.js')

var add = function(a, b){
	return a + b;
};

var create = function() {
    var element = document.createElement('h1');
	element.innerHTML = '2 + 1 = ' + add(2, 1);
	console.log('create method..');
	
	return element;
};

module.exports = {
	add: add,
	do: create
};