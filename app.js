/*
Description

Task: 


Store your name in a varibale. 

Store your courses in an array. 

Display your name and courses and do one of the following: 


1. If the number of courses you are doing is an odd number, find and display all odd numbers from 1-200 (inclusive)
2. If the number of courses you are doing is an even number, find and display all even numbers from 1-200 (inclusive)
*/

// Solution
const name = 'Joshua Folorunsho';

const courses = ['HTML', 'CSS', 'JS'];


console.log(name)
console.log(courses)

if (courses.length % 2) {
	for (let i = 1; i <= 200; i += 2) {
		console.log(i);
	}
} else {
	for (let i = 2; i <= 200; i += 2) {
		console.log(i);
	}
}
