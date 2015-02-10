function objFind(obj, constructor, level) {
  var k, s = '';
  // try {
    if (level < 4 && !!obj) {
      for (k in obj) {
        if (!!obj && !!obj[k]) {
          if (typeof(obj[k]) === typeof(constructor)) {
            if (obj[k] instanceof constructor) {
              s += ' !' + k + '\n';
            } else {
              s += ' .' + k + '\n';
            }
          } else {
            if (typeof(obj[k]) === 'object') {
               s += ' .' + k + ': ' + objFind(obj[k], constructor, level + 1) + 
'\n';
            }
          }
        }  
      }
    }
  // } catch(e) {
  //  return level + ': ' + k + ' undefined! '
  //}
  return s;
}

console.log(objFind(app, Function, 0));

// + objFind(obj[k], constructor, level + 1);

if (obj[k] instanceof constructor) {
            s += '!' + k + '\n';
          } else {
            s += '.' + k;
          }
          
var app = require('./server/server.js');
var ev=require('events');
var net = require('net');
