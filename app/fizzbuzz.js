function FizzBuzz () {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
	return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
	return number % 5 === 0;
};

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
	return number % 15 === 0;
};

FizzBuzz.prototype.fizz = function(number) {
	if (this.isDivisibleByFifteen(number)) {
		return 'FizzBuzz';
	}

	if (this.isDivisibleByThree(number)) {
		return 'Fizz';
	}

	if (this.isDivisibleByFive(number)) {
		return 'Buzz';
	}

	return number;
};

(function printToConsole () {
	var count = 100,
		  fizzBuzz = new FizzBuzz();

	for (var i = 1; i < count; i++) {
		console.log(fizzBuzz.fizz(i));
	}
})();