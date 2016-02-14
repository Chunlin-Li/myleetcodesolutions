/**
 * 65. Valid Number
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if (/^ *(-?|\+?)(\d+|\.\d+|\d+\.\d+|\d+\.)(e(-?|\+?)\d+)? *$/.test(s)) return true;
    return false;
};