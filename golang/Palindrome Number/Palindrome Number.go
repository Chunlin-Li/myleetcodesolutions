package main

// https://leetcode.com/problems/palindrome-number/description/
import (
	"fmt"
	"math"
)

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	var a, n int
	a = x
	list := make([]int, 0, 100)
	for math.Abs(float64(a)) > 0 {
		list = append(list, a%10)
		a /= 10
	}

	for n = 0; n < len(list)/2; n++ {
		if list[n] != list[len(list)-1-n] {
			return false
		}
	}

	return true
}

func main() {
	list := []int{123, -123, 12321, 123321, 1534236469}
	for _, num := range list {
		fmt.Println(num, isPalindrome(num))
	}
}
