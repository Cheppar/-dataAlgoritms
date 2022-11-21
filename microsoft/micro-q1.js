function solution(N) {
	var power = Math.floor(Math.log10(N))

	if(N < 10){
		return power;
	}

	return 10 ** power
}

solution();