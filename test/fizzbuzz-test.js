var fizzBuzz;

beforeEach(function () {
	fizzBuzz = new FizzBuzz();
});

describe('Fizzbuzz', function() {
	it('Should know when a number is divisible by 3', function () {
		expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
	});

	it('Should know when a number is not divisible by three', function () {
		expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
	});

	it('Should know when a number is divisible by 5', function () {
		expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
	});

	it('Should know when a number is not divisible by 5', function () {
		expect(fizzBuzz.isDivisibleByFive(1)).toBe(false);
	});

	it('should know when a number is divisible by both 3 and 5', function () {
		expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
	});

	it('Should know when a number is not divisible by 3 and 5', function () {
		expect(fizzBuzz.isDivisibleByFifteen(1)).toBe(false);
	});

	it('Should return Fizz if number is divisible by 3', function () {
		expect(fizzBuzz.fizz(3)).toBe('Fizz');
	});

	it('Should return Buzz if number is divisible by 5', function () {
		expect(fizzBuzz.fizz(5)).toBe('Buzz');
	});

	it('Should return FizzBuzz if number is divisible by 15', function () {
		expect(fizzBuzz.fizz(15)).toBe('FizzBuzz');
	});

	it('Should return the number if it isnt divisible by 3 or 5', function () {
		expect(fizzBuzz.fizz(1)).toBe(1);
	});
});