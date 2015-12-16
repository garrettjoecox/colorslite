
var getters = {

  reset:     colorGetter(0, 0),
  bold:      colorGetter(1, 0),
  dim:       colorGetter(2, 0),
  underline: colorGetter(4, 0),
  blink:     colorGetter(5, 0),
  inverse:   colorGetter(7, 0),
  hidden:    colorGetter(8, 0),

  black:    colorGetter(30, 39),
  red:      colorGetter(31, 39),
  green:    colorGetter(32, 39),
  yellow:   colorGetter(33, 39),
  blue:     colorGetter(34, 39),
  magenta:  colorGetter(35, 39),
  cyan:     colorGetter(36, 39),
  white:    colorGetter(37, 39),
  gray:     colorGetter(90, 39),
  lRed:     colorGetter(91, 39),
  lGreen:   colorGetter(92, 39),
  lYellow:  colorGetter(93, 39),
  lBlue:    colorGetter(94, 39),
  lMagenta: colorGetter(95, 39),
  lCyan:    colorGetter(96, 39),

  bgBlack:    colorGetter(40, 0),
  bgRed:      colorGetter(41, 0),
  bgGreen:    colorGetter(42, 0),
  bgYellow:   colorGetter(43, 0),
  bgBlue:     colorGetter(44, 0),
  bgMagenta:  colorGetter(45, 0),
  bgCyan:     colorGetter(46, 0),
  bgWhite:    colorGetter(47, 0),
  bgGray:     colorGetter(100, 0),
  bglRed:     colorGetter(101, 0),
  bglGreen:   colorGetter(102, 0),
  bglYellow:  colorGetter(103, 0),
  bglBlue:    colorGetter(104, 0),
  bglMagenta: colorGetter(105, 0),
  bglCyan:    colorGetter(106, 0)

};

function colorGetter(num1, num2) {
  return {
    get: function() {
      return `\x1B[${num1}m${this.valueOf()}\x1B[${num2}m`;
    }
  }
}

Object.defineProperties(String.prototype, getters);

// Uncomment to display all styles

// for (var style in getters) {
//   console.log(style[style]);
// }
