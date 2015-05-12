//--- module1.js ---
exports.square = function(x) {
	return x * x;
};

exports.diag =  function(x, y) {
	return Math.sqrt(square(x) + square(y));
};
