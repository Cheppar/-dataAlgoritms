//-- The worst case complesxity of an algorithm 
// -- It describes the complexity of an algorithm using algebraic terms


// IMPORTANT CHARACTERISTICS
// 1. It is expressed in terms of the input
// 2. Focuses on the bigger picture without being caught up in the minute details


// TIME COMPLEXITY

// Calculate the worst case complexity of our program.

function summation(n){
	let sum = 0; // will be executed
	for(let i = 1, i <= n; i++){
		sum += i;  // will be executed
	}
	return sum; // will be executed
}

// EXPLANATION 
// *** POINT 1 ****
// summation (4) = 10 ---
// 1 + 2 + 3 + 4 = 10
The time complexity entails claculating the number of times a statement executes based on input size.


// big -o is expressed in terms of the input


// *** POINT 2 ****