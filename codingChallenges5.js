function addUp(num) {
	return num == 0 ? num : num + addUp(num -1);
	
}
// should return 10
console.log(addUp(4));

// should return 91
console.log(addUp(13));