#!/usr/bin/env node

var nv = require('./App');
(async () => {
var data = await nv();
console.log(' \n Current Version : ' + data.current + '\n')
console.log(' \n Latest Version : ' + data.latest + '\n')
})();
