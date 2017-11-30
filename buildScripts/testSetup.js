// regsiter babel to transpile before our tests run
require('babel-register')();


// disable webpack features that Mocha won't understand
require.extensions['.css'] = function() {};