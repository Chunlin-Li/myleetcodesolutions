package main

import (
	"fmt"
	"math"
	"strings"
)

func myAtoi(str string) int {
	start := false
	var flag int32 = 1
	var number int32
	for _, c := range str {

		if !start {
			if c == 32 {
				continue
			}
			if c == 45 {
				start = true
				flag = -1
				continue
			}
			if c == 43 {
				start = true
				continue
			}
		}
		if c >= 48 && c < 58 {
			digital := c - 48
			start = true
			if flag == 1 && number > (math.MaxInt32-digital)/10 {
				return math.MaxInt32
			} else if flag*number < (math.MinInt32+digital)/10 {
				return math.MinInt32
			}
			number = number*10 + digital
		} else {
			break
		}
	}
	return int(number * flag)
}

func main() {
	//str := "   -2147483649"
	//fmt.Println(myAtoi(str))
	//fmt.Println(strings.Trim(str, " "))
	str := " +2147483648"
	fmt.Println(myAtoi(str))
	fmt.Println(strings.Trim(str, " "))
}
