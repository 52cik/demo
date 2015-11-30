var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var int1 = function (n) {
	return +n;
};

var int2 = function (n) {
	return parseInt(n, 10);
};

var int3 = function (n) {
	return Number(n);
};



var number = '100';

suite.add('+', function () {
	int1(number);
}).add('parseInt', function () {
	int2(number);
}).add('Number', function () {
	int3(number);
}).on('cycle', function (e) {
	console.log(String(e.target));
}).on('complete', function () {
	console.log('Fastest is', this.filter('fastest').pluck('name'));
}).run({'async': true});


