const _ = require('lodash') ;

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

exports.curriedGreet = _.curry(greet);
