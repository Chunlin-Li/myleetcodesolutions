/**
 * @param {number} n
 * @return {boolean}
 */

//var dep = 0;
var isHappy = function(n) {
    //var z = n;
    var t = [];
    while (n !== 1) {
        t.push(n);
        n = ('' + n).split('').reduce(function(p,c){return p + c * c}, 0);
        if (t.indexOf(n) !== -1) {
            //if (t.length > dep){
            //    dep = t.length;
            //    console.log('# ', z);
            //}
            return false;
        }
    }
    //if (t.length > dep) {
    //    dep = t.length;
    //    console.log('@ ', z);
    //}
    return true;
};

// 15999 , 19599 , 19959 , 19995   最大深度 20 次

// 10000000 以内符合条件的值最大深度 7

//for (var i = 16000; i < 10000000; i ++) {
//    isHappy(i);
//}

//console.log(dep);

console.log(isHappy(19));
console.log(isHappy(18));