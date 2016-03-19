'use strict';

/**
 * 国家:  1英国 2瑞典 3丹麦 4德国 5挪威
 * 房屋位置:    1-5
 * 房屋颜色:    1红色 2绿色 3黄色 4蓝色 5白色
 * 饮料:      1茶 2咖啡 3啤酒 4水 5牛奶
 * 烟:       1PM 2Dh 3B 4BM 5P
 * 宠物:      1狗 2鸟 3马 4猫 5鱼
 *
 * [国家, 颜色, 饮料, 烟  , 宠物]
 *
 * [5,3,4,2,4]
 * [3,4,1,3,3]
 * [1,1,5,1,2]
 * [4,2,2,5,5]
 * [2,5,3,4,1]
 *
 * [[5,2,2,1,2]
 * ,[4,4,4,5,4]
 * ,[1,1,5,3,3]
 * ,[3,3,1,2,5]
 * ,[2,5,3,4,1]]
 */

var result = [];

var sta = [null, '英国', '瑞典', '丹麦', '德国', '挪威'];
var col = [null, '红', '绿', '黄', '蓝', '白'];
var drk = [null, '茶', '咖啡', '啤酒', '水', '牛奶'];
var cgr = [null, 'PallMall', 'Dunhill', 'Blend', 'BlueMaster', 'Prince'];
var pet = [null, '狗', '鸟', '马', '猫', '鱼'];

for (let i = 0; i < 5; i++) { // 房屋位置
    result[i] = result[i] || [];
}

//var totalPerm = combinatorics.combination(array, 5);
var count = 0;
//for (let k = 0; k < totalPerm.length )
//let cmb;
perm(1,1);
perm.cache.filter(item => item[0] !== 1);

var lenP = 120;
for(let x3=0;x3<lenP;x3++) {
    if (perm.cache[x3][2] !== 5) continue;
    for(let x2=0;x2<lenP;x2++) {
        if (perm.cache[x2][1] !== 4) continue;
        //if (perm.cache[x2].indexOf(2) !== perm.cache[x3].indexOf(2)) continue;
        for(let x1=0;x1<lenP;x1++) {
            //if (perm.cache[x2].indexOf(1) !== perm.cache[x3].indexOf(1)) continue;
            if (perm.cache[x1][0] !== 5) continue;
            for(let x4=0;x4<lenP;x4++){
                for(let x5=0;x5<lenP;x5++){
                    foo(x1,x2,x3,x4,x5);
                    count ++;
                    if(count%1000000 === 0) console.log(count);
                }
            }
        }
    }
}
console.log('finished');

function foo(a,b,c,d,e) {
    let index = [a,b,c,d,e];
    for (let j = 0;j<5;j++) {
        for (let i = 0; i < 5; i++) {
            result[i][j] = perm(index[j], i);
        }
    }

    if(check(result) === 0) {
        output(result);
    }
}

function output(res) {
    console.log('***********');
    for (let j=0;j<5;j++){
        console.log(`[${sta[res[j][0]]}, ${col[res[j][1]]}, ${drk[res[j][2]]}, ${cgr[res[j][3]]}, ${pet[res[j][4]]}]`);
    }
    console.log('***********');
}

/**
 * No.1 [国家, 颜色, 饮料, 烟  , 宠物]
 * ....
 * No.5 [国家, 颜色, 饮料, 烟, 宠物]
 */

result = [
[5,3,4,2,4],
[3,4,1,3,3],
[1,1,5,1,2],
[4,2,2,5,5],
[2,5,3,4,1]
];

//console.log(check(result));


function check(res) {
    let green = 9;

    if(res[2][2] !== 5)
        return 1;

    for (let i =0;i<5;i++){
        if(res[i][0] === 1 && res[i][1] !== 1)
            return 2;

        if(res[i][0] === 2 && res[i][4] !== 1)
            return 3;

        if(res[i][0] === 3 && res[i][2] !== 1)
            return 4;

        if(res[i][1] === 2 && res[i][2] !== 2)
            return 5;

        if(res[i][3] === 1 && res[i][4] !== 2)
            return 6;

        if(res[i][1] === 3 && res[i][3] !== 2)
            return 7;

        if(res[i][0] === 5 && i !== 0)
            return 8;

        if(res[i][3] === 3) {
            let b1 = i < 4 && res[i+1][4] === 4;
            let b2 = i > 0 && res[i-1][4] === 4;
            if (!b1 && !b2)
                return 9;
        }

        if(res[i][4] === 3) {
            let b1 = i < 4 && res[i+1][3] === 2;
            let b2 = i > 0 && res[i-1][3] === 2;
            if (!b1 && !b2)
                return 10;
        }

        if(res[i][3] === 4 && res[i][2] !== 3)
            return 11;

        if(res[i][0] === 4 && res[i][3] !== 5)
            return 12;

        if(res[i][0] === 5) {
            let b1 = i < 4 && res[i+1][1] === 4;
            let b2 = i > 1 && res[i-1][1] === 4;
            if (!b1 && !b2)
                return 13;
        }

        if(res[i][2] === 4) {
            let b1 = i < 4 && res[i+1][3] === 3;
            let b2 = i > 1 && res[i-1][3] === 3;
            if (!b1 && !b2)
                return 14;
        }

        if(res[i][1] === 2) {
            green = i;
        }

        if(res[i][1] === 5 && i < green)
            return 15;

    }


    return 0;

}

function perm(i, j) {
    if (!perm.cache) {
        perm.cache = computePerm([1,2,3,4,5]);
    }
    return perm.cache[i][j];
}


function computePerm(ary) {
    var permArr = [],
        usedChars = [];

    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    }
    return permute(ary);
}