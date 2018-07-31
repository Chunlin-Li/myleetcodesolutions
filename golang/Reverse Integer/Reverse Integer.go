package main

// https://leetcode.com/problems/reverse-integer/description/
import (
	"fmt"
	"math"
)

func reverse(x int) int {
	if float64(x) > math.Pow(2, 31)-1 || float64(x) < -math.Pow(2, 31) {
		return 0
	}
	var a, b, y, n int
	a = x
	n = 1
	for math.Abs(float64(a)) >= 10 {
		n++
		a = a / 10
	}

	a = x
	b = 0

	for ; n > 0; n-- {
		y = a % 10
		a = a / 10
		b = int(float64(y)*math.Pow10(n-1) + float64(b))
	}

	if float64(b) > math.Pow(2, 31)-1 || float64(b) < -math.Pow(2, 31) {
		return 0
	}
	return b
}

func main() {
	list := []int{123, -123, 210, 1534236469}
	for _, num := range list {
		fmt.Println(num, reverse(num))
	}
}
