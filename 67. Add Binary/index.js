/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    var c = [];
    var carry = false;
    var length = Math.max(a.length, b.length);
    for (var i = 0; (i < length) || carry; i ++) {
        c.push(a[i] ^ b[i] ^ carry);
        a[i] & b[i] || (a[i] | b[i]) & carry ? carry = true : carry = false;
    }
    return c.reverse().join('');
};

console.log(addBinary('0', '0'));
console.log(addBinary('1', '11'));
console.log(addBinary('1', '100'));
console.log(addBinary('111', '111'));
console.log(addBinary('101', '101'));
