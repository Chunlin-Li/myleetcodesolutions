/**
 * 126. Word Ladder II
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    var result = [[beginWord]];
    var val, i, j;

    var cur = beginWord;
    var list_add = [], list_target = [];
    while (result[0].length === wordList.length) {
        for (j = 0; j < result.length; j ++) {
            for (i in wordList) {
                val = wordList[i];
                if (comp(val, cur) === 1) {
                    list_add.push(val);
                }
            }
            if (result[j][result[j].length -1] !== cur) continue;
            for (i = 0; i < list_add.length; i++) {
                if (result[i]) {

                } else {
                    //result[i] =
                }
            }
        }
    }
    var comp = function(a, b) {
        var count = 0;
        for (var i = 0; i < a.length; i ++) {
            if (a[i] !== b[i]) count++;
        }
        return count;
    }

};