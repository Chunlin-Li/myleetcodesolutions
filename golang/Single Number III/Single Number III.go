package main

import "fmt"

func singleNumber(nums []int) []int {
	var i, p int
	var xor0, xor1 int = 0, 0
	for i = 0; i < len(nums); i++ {
		xor0 ^= nums[i]
	}
	for  p = 1; p > 0; p *= 2{
		if xor0 & p > 0 {
			break
		}
	}
	xor0 = 0
	for i = 0; i < len(nums); i++ {
		if nums[i] & p == 0 {
			xor0 ^= nums[i]
		} else {
			xor1 ^= nums[i]
		}
	}
	return []int{xor0, xor1}
}

func main() {
	fmt.Println(singleNumber([]int{1,2,1,3,2,5}))
}
