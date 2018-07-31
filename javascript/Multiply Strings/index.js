/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    var res = [], i, j, carry = 0, tmp, _len = num1.length + num2.length;
    for (i = 0; i < _len; i ++ ) {
        res.push(0);
    }
    for (i = 0; i < num1.length; i ++) {
        for (j = 0; j < num2.length; j ++) {
            tmp = parseInt(num1[i]) * parseInt(num2[j]);
            res[i + j] += tmp % 10;
            res[i + j + 1] += (tmp / 10) >>> 0;
        }
    }
    for (i = 0; i < res.length; i ++ ) {
        if (res[i] > 9) {
            res[i + 1] += (res[i] / 10) >>> 0;
            res[i] = res[i] % 10;
        }
    }
    return res.reverse().join('').replace(/^0+([0-9]+)/, '$1');
};

console.log(multiply('123', '456'));
console.log(multiply('0', '0'));
console.log(multiply('10000', '100000000'));
console.log(multiply('99999', '999999'));