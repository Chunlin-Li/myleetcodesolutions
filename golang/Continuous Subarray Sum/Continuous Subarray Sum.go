package main

import (
	"fmt"
	"math"
)

func checkSubarraySum01(nums []int, k int) bool {
	if len(nums) <= 1 {
		return false
	}
	if k == 0 {
		prev := -1
		for i := 0; i < len(nums); i++ {
			if nums[i] == 0 {
				if prev == 0 {
					return true
				}
			}
			prev = nums[i]
		}
		return false
	}
	if k == 1 || k == -1 {
		return true
	}
	for i := 0; i < len(nums); i++ {
		sum := nums[i]
		for j := i + 1; j < len(nums); j++ {
			sum += nums[j]
			if sum%k == 0 {
				//fmt.Println(i, j, sum)
				return true
			}
		}
	}
	return false
}

func checkSubarraySum(nums []int, k int) bool {
	if len(nums) <= 1 {
		return false
	}
	if k == 0 {
		prev := -1
		for i := 0; i < len(nums); i++ {
			if nums[i] == 0 {
				if prev == 0 {
					return true
				}
			}
			prev = nums[i]
		}
		return false
	}
	if k == 1 || k == -1 {
		return true
	}

	sum := 0

	for i := 0; i < len(nums); i++ {
		sum = 0
		for j := i; j < i+2*int(math.Abs(float64(k))) && j < len(nums); j++ {
			sum += nums[j]
			if j > i && sum%k == 0 {
				return true
			}
		}
	}
	return false
}

func main() {

	fmt.Println(checkSubarraySum01([]int{5, 2, 4}, 5))
	fmt.Println(checkSubarraySum([]int{5, 2, 4}, 5))
}
