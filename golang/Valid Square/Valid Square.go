package main

import (
	"fmt"
)

func validSquare(p1 []int, p2 []int, p3 []int, p4 []int) bool {
	lenMap := make(map[int]bool)
	lenMap[distPow2(p1, p2)] = true
	lenMap[distPow2(p1, p3)] = true
	lenMap[distPow2(p2, p3)] = true
	lenMap[distPow2(p4, p1)] = true
	lenMap[distPow2(p4, p2)] = true
	lenMap[distPow2(p4, p3)] = true
	return len(lenMap) == 2 && !lenMap[0]
}

func distPow2(p1 []int, p2 []int) int {
	return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1])
}

func main() {
	fmt.Println(validSquare([]int{0,0}, []int{1,1}, []int{0,0}, []int{0,0}))
}
