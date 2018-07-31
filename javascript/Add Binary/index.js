// 位运算
var addBinary0 = function(a, b) {
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


// 递归  无数值计算  纯状态判断
var addBinary1 = function(a, b, c) {

    typeof a === 'string' ? a = a.split('') : void(0);
    typeof b === 'string' ? b = b.split('') : void(0);
    var x = a.splice(a.length - 1, 1)[0] || '0';
    var y = b.splice(b.length - 1, 1)[0] || '0';
    var res = bitProcess(x, y, c || '0');
    if (a.length || b.length || res[1] === '1') {
        return addBinary(a, b, res[1]) + res[0];
    } else {
        return res[0];
    }

    function bitProcess(a, b, c) {
        if (a === '0') {
            if (b === '0') {
                if (c === '0') {
                    return ['0', '0'];
                } else {
                    return ['1', '0'];
                }
            } else {
                if (c === '0') {
                    return ['1', '0'];
                } else {
                    return ['0', '1'];
                }
            }
        } else {
            if (b === '0') {
                if (c === '0') {
                    return ['1', '0'];
                } else {
                    return ['0', '1'];
                }
            } else {
                if (c === '0') {
                    return ['0', '1'];
                } else {
                    return ['1', '1'];
                }
            }
        }
    }
};



// 消除递归  无数值计算  纯状态判断  
var addBinary = function(a, b, c) {

    a instanceof Array ?  void(0) : a = a.split('');
    b instanceof Array ?  void(0) : b = b.split('');
    var c, sum, str, res = [];

    while (a.length || b.length || c === '1') {
        str = (a.pop() || '0') + (b.pop() || '0') + (c || '0');
        switch (str) {
            case '000': sum = '0'; c = '0'; break;
            case '001':
            case '010':
            case '100': sum = '1'; c = '0'; break;
            case '011':
            case '101':
            case '110': sum = '0'; c = '1'; break;
            case '111': sum = '1'; c = '1'; break;
        }
        res.unshift(sum);
    }
    return res.join('');
};


console.log(addBinary('0', '0'));
console.log(addBinary('1', '11'));
console.log(addBinary('1', '100'));
console.log(addBinary('111', '111'));
console.log(addBinary('101', '101'));
