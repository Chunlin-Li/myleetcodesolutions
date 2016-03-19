/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 3) return 0;
    // 初始化一个大字节数组, 0和1的位置初始化为0, 其余的初始化为1.
    var base = new Buffer(n).fill(1, 2);
    var count = 0;
    // i 表示当前找到的质数,同时也是base数组的下标
    var i = 2, j;
    while (i !== -1) {
        // 当前如果能找到一个 i , 则它一定是质数, +1
        count ++;
        // 当前质数的 2 倍 (j) 一定是合数.
        j = i * 2;
        while (j < base.length) {
            // 将合数标记为0
            base[j] = 0;
            // 将所有当前质数的倍数全部标记为合数
            j += i;
        }
        // 找到从下一个自然数开始的未被标记为合数的数,
        // 这个数一定是质数!
        i = base.indexOf(0x1, i + 1);
    }
};