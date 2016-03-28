/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) return false;
    var t;
    for (var i = 2; i <= num; i ++ ) {
        if (i > 5) return false;
        t = num / i;
        if (Number.isInteger(t)) {
            i --;
            num = t;
        }
    }
    return num === 1;
};

// 2, 3, 5

console.log(isUgly(1));
console.log(isUgly(4));
console.log(isUgly(905391974));
