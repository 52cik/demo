var getDay = require('../getDay').getDay;
var should = require('should');

describe('test/getDay.test.js', function () {
	it('测试各周星期五的日期', function () {
		var dts = [
			'2015-11-17',
			'2015-11-07',
			'2015-10-01',
			'2015-10-31',
			'2015-11-27',
		];

		dts.forEach(function (d) {
			var r = getDay(5, d);
			var dt = new Date(r);
			var day = dt.getDay();

			day.should.equal(5);
		});

		var r = getDay(5);
		var dt = new Date(r);
		var day = dt.getDay();
		day.should.equal(5);
	});

	it('测试各周星期二的日期', function () {
		var dts = [
			'2015-11-17',
			'2015-11-07',
			'2015-10-01',
			'2015-10-31',
			'2015-11-27',
		];

		dts.forEach(function (d) {
			var r = getDay(2, d);
			var dt = new Date(r);
			var day = dt.getDay();

			day.should.equal(2);
		});

		var r = getDay(2);
		var dt = new Date(r);
		var day = dt.getDay();
		day.should.equal(2);
	});
});
