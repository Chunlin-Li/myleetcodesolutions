package main

import "fmt"

// https://leetcode.com/problems/two-sum/
// force O(n^2)
func twoSum01(nums []int, target int) []int {
	var res []int
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				res = []int{i, j}
			}
		}
	}
	return res
}

// two pass O(2n)
func twoSum02(nums []int, target int) []int {
	var res []int
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		m[nums[i]] = i
	}
	for i := 0; i < len(nums); i++ {
		j, c := m[target-nums[i]]
		if c == true && i != j {
			res = []int{i, j}
			break
		}
	}

	return res
}

// one pass O(n)
func twoSum(nums []int, target int) []int {
	var res []int
	m := make(map[int]int, len(nums))
	for i := 0; i < len(nums); i++ {
		j, present := m[target-nums[i]]
		if present {
			res = []int{j, i}
		} else {
			m[nums[i]] = i
		}
	}
	return res
}

func main() {
	//m := make(map[int]int)
	//m[2] = 20
	//m[3] = 0
	//fmt.Println(m[3])

	fmt.Println(twoSum([]int{3, 2, 4}, 6))
}
