
var getters = {

  reset:          { get: function(){ return '\x1B[0m' + this.valueOf() + '\x1B[0m';  } },
  bold:           { get: function(){ return '\x1B[1m' + this.valueOf() + '\x1B[0m'; } },
  dim:            { get: function(){ return '\x1B[2m' + this.valueOf() + '\x1B[0m'; } },
  underline:      { get: function(){ return '\x1B[4m' + this.valueOf() + '\x1B[0m'; } },
  blink:          { get: function(){ return '\x1B[5m' + this.valueOf() + '\x1B[0m'; } },
  inverse:        { get: function(){ return '\x1B[7m' + this.valueOf() + '\x1B[0m'; } },
  hidden:         { get: function(){ return '\x1B[8m' + this.valueOf() + '\x1B[0m'; } },

  black:    { get: function(){ return '\x1B[30m' + this.valueOf() + '\x1B[39m'; } },
  red:      { get: function(){ return '\x1B[31m' + this.valueOf() + '\x1B[39m'; } },
  green:    { get: function(){ return '\x1B[32m' + this.valueOf() + '\x1B[39m'; } },
  yellow:   { get: function(){ return '\x1B[33m' + this.valueOf() + '\x1B[39m'; } },
  blue:     { get: function(){ return '\x1B[34m' + this.valueOf() + '\x1B[39m'; } },
  magenta:  { get: function(){ return '\x1B[35m' + this.valueOf() + '\x1B[39m'; } },
  cyan:     { get: function(){ return '\x1B[36m' + this.valueOf() + '\x1B[39m'; } },
  white:    { get: function(){ return '\x1B[37m' + this.valueOf() + '\x1B[39m'; } },
  gray:     { get: function(){ return '\x1B[90m' + this.valueOf() + '\x1B[39m'; } },
  lRed:     { get: function(){ return '\x1B[91m' + this.valueOf() + '\x1B[39m'; } },
  lGreen:   { get: function(){ return '\x1B[92m' + this.valueOf() + '\x1B[39m'; } },
  lYellow:  { get: function(){ return '\x1B[93m' + this.valueOf() + '\x1B[39m'; } },
  lBlue:    { get: function(){ return '\x1B[94m' + this.valueOf() + '\x1B[39m'; } },
  lMagenta: { get: function(){ return '\x1B[95m' + this.valueOf() + '\x1B[39m'; } },
  lCyan:    { get: function(){ return '\x1B[96m' + this.valueOf() + '\x1B[39m'; } },

  bgBlack:    { get: function(){ return '\x1B[40m'  + this.valueOf() + '\x1B[0m'; } },
  bgRed:      { get: function(){ return '\x1B[41m'  + this.valueOf() + '\x1B[0m'; } },
  bgGreen:    { get: function(){ return '\x1B[42m'  + this.valueOf() + '\x1B[0m'; } },
  bgYellow:   { get: function(){ return '\x1B[43m'  + this.valueOf() + '\x1B[0m'; } },
  bgBlue:     { get: function(){ return '\x1B[44m'  + this.valueOf() + '\x1B[0m'; } },
  bgMagenta:  { get: function(){ return '\x1B[45m'  + this.valueOf() + '\x1B[0m'; } },
  bgCyan:     { get: function(){ return '\x1B[46m'  + this.valueOf() + '\x1B[0m'; } },
  bgWhite:    { get: function(){ return '\x1B[47m'  + this.valueOf() + '\x1B[0m'; } },
  bgGray:     { get: function(){ return '\x1B[100m' + this.valueOf() + '\x1B[0m'; } },
  bglRed:     { get: function(){ return '\x1B[101m' + this.valueOf() + '\x1B[0m'; } },
  bglGreen:   { get: function(){ return '\x1B[102m' + this.valueOf() + '\x1B[0m'; } },
  bglYellow:  { get: function(){ return '\x1B[103m' + this.valueOf() + '\x1B[0m'; } },
  bglBlue:    { get: function(){ return '\x1B[104m' + this.valueOf() + '\x1B[0m'; } },
  bglMagenta: { get: function(){ return '\x1B[105m' + this.valueOf() + '\x1B[0m'; } },
  bglCyan:    { get: function(){ return '\x1B[106m' + this.valueOf() + '\x1B[0m'; } },

};

Object.defineProperties(String.prototype, getters);

// Uncomment to display all styles

// for (var style in getters) {
//   console.log(style[style]);
// }
