var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function (req, res, next) {
	superagent.get('https://cnodejs.org/')
		.end(function (err, sres) {
			if (err) {
				return next(err);
			}

			var $ = cheerio.load(sres.text);
			var items = [];

			$('#topic_list .topic_title').each(function (i, el) {
				var $el = $(el);

				items.push({
					title: $el.attr('title'),
					href: $el.attr('href'),
					author: $el.parents('.cell').find('.user_avatar img').attr('title')
				});
			});

			res.send(items);
		});
});

app.listen(3000, function () {
	console.log('app is running at port 3000');
});