var express = require('express');

function fibonacci (n) {
	if (typeof n !== 'number' || isNaN(n)) {
		throw new Error('n should be a Number');
	}

	if (n < 0) {
		throw new Error('n should >= 0');
	}

	if (n > 10) {
		throw new Error('n should <= 10');
	}

	if (n < 2) {
		return n;
	}

	return fibonacci(n-1) + fibonacci(n-2);
}


var app = express();

app.get('/fib', function (req, res) {
	var n = Number(req.query.n);

	try {
		res.send(String(fibonacci(n)));
	} catch (e) {
		res.status(500).send(e.message);
	}
});

app.listen(3000, function () {
	console.log('app is listening at prot 3000.');
});

module.exports = app;
