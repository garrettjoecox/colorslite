
Object.defineProperties(String.prototype, {

  magenta: { get: function(){ return '\x1B[35m' + this.valueOf() + '\x1B[39m'; } },
  yellow: { get: function(){ return '\x1B[33m' + this.valueOf() + '\x1B[39m'; } },
  white: { get: function(){ return '\x1B[37m' + this.valueOf() + '\x1B[39m'; } },
  black: { get: function(){ return '\x1B[30m' + this.valueOf() + '\x1B[39m'; } },
  green: { get: function(){ return '\x1B[32m' + this.valueOf() + '\x1B[39m'; } },
  grey: { get: function(){ return '\x1B[90m' + this.valueOf() + '\x1B[39m'; } },
  blue: { get: function(){ return '\x1B[34m' + this.valueOf() + '\x1B[39m'; } },
  cyan: { get: function(){ return '\x1B[36m' + this.valueOf() + '\x1B[39m'; } },
  red: { get: function(){ return '\x1B[31m' + this.valueOf() + '\x1B[39m'; } },

});