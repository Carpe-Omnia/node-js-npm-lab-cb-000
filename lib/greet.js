const _ = require('lodash') ;

function greet(greeting, greetee) {
  return `${greeting}, ${greetee}!`;
}

module.exports = const curriedGreet = _.curry(greet);
