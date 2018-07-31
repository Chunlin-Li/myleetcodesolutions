package main

import (
	"fmt"
	"time"
)

func canJump01(nums []int) bool {
	atLeast := 0
	for i := len(nums) - 1; i >= 0; i-- {
		if atLeast > 0 && nums[i] >= atLeast {
			atLeast = 0
		}
		if atLeast != 0 {
			atLeast++
		}
		if atLeast == 0 && nums[i] == 0 && i < len(nums)-1 {
			atLeast = 2
		}
	}
	return atLeast == 0
}

func canJump(nums []int) bool {
	far := 0
	last := len(nums) - 1
	for i := 0; i < last && i <= far; i++ {
		if nums[i]+i > far {
			far = nums[i] + i
		}
	}
	return far >= last
}

func main() {
	t1 := time.Now().UnixNano()
	fmt.Println(canJump([]int{2, 3, 1, 1, 4}))
	fmt.Println((time.Now().UnixNano() - t1) / 1000)
}
