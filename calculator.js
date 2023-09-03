
function calc(...args) {
    if (args.length < 3) {
      throw new Error('Invalid input');
    }
  
    const operators = ['+', '-', '*', '/'];
    const input = args.join('');
  
    for (let i = 0; i < args.length; i++) {
      if (i % 2 === 1 && !operators.includes(args[i])) {
        throw new Error('Invalid operator');
      }
    }
  
    if (input.includes('/0')) {
      throw new Error('Division by zero');
    }
  
    if (!args.every(arg => typeof arg === 'number' || operators.includes(arg))) {
      throw new Error('Invalid input type');
    }
  
    if (input.includes('-') ||input.includes('+') ) {
      args = args.map(arg => (typeof arg === 'number' && arg > 1000 ? 0 : arg));
    }
    
    if (input.includes('*') ||input.includes('/') ) {
        args = args.map(arg => (typeof arg === 'number' && arg > 1000 ? 1 : arg));
      }
  
    let result = eval(args.join(''));
  
    return result;
  }
  
  module.exports = calc;
  
  



