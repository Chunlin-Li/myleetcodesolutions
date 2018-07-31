package main

import (
	"fmt"
	"strconv"
	"strings"
	"time"
)

func countBits01(num int) []int {
	result := make([]int, num + 1)

	for i := 0; i <= num; i ++ {
		if i % 2 == 1 && i > 0 {
			result[i] = result[i - 1] + 1
		} else {
			bin := strconv.FormatInt(int64(i), 2)
			result[i] = strings.Count(bin, "1")
		}
	}

	return result
}

func countBits(num int) []int {
	result := make([]int, num + 1)

	i := num
	for i > num / 2 { // 只需要从 num 遍历到 num/2 即可. 执行 f() 的过程中会自动计算 num/2 以下的结果
		result[i] = f(result, i)
		// 跳过偶数, 因为会在计算比其大1的奇数时顺便得出对应偶数的结果
		i -= (i % 2) + 1
	}

	return result
}

func f(result []int, num int) int {
	if result[num] == 0 {
		if num < 2 {
			result[num] = num % 2
		} else {
			if num % 2 == 1 { //奇数时顺带得出偶数的结果
				result[num] = f(result, num/2) + 1
				result[num - 1] = result[num] - 1
			} else {
				result[num] = f(result, num/2)
			}
		}
	}
	return result[num]
}

func main() {
	t1 := time.Now().UnixNano()
	fmt.Println(countBits(50))
	fmt.Println((time.Now().UnixNano() - t1) / 1000)
}

/*
f(0) = 0
f(1) = 1

f(2) = 1 = 1 + 0
f(3) = 2 = 1 + 1

f(4) = 1 = 1 + 0
f(5) = 2 = 1 + 1

f(6) = 2 = 2 + 0
f(7) = 3 = 2 + 1

f(8) = 1 = 1 + 0
f(9) = 2 = 1 + 1

f(10) = 2
f(11) = 3
f(12) = 2
f(13) = 3
f(14) = 3
f(15) = 4
f(16) = 1
f(17) = 2
f(18) = 2
f(19) = 3
f(20) = 2
 */