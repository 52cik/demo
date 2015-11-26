var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eachLimit = require('async').eachLimit;

var ep = new eventproxy();
var url = require('url');

var site = 'https://cnodejs.org/';

superagent.get(site).end(function (err, res) {
	if (err) {
		return console.error(err);
	}

	var topicUrls = [];
	var $ = cheerio.load(res.text);

	// 抓取所有贴着url
	$('#topic_list .topic_title').each(function (i, el) {
		var $el = $(el);
		var href = url.resolve(site, $el.attr('href'));
		topicUrls.push(href);
	});

	// 贴子抓取完成后处理
	ep.after('topic_list', topicUrls.length, function (datas) {
		datas = datas.map(function (dt) {
			var $ = cheerio.load(dt[1]);
			var $reply = $('.reply_content').eq(0);
			var url_author1 = $reply.parent().find('.user_avatar').attr('href');
			url_author1 = url_author1 ? url.resolve(site, url_author1) : false;

			return {
				title: $('.topic_full_title').text().trim(),
				href: dt[0],
				comment1: $reply.text().trim(), // 第一个回复内容
				url_author1: url_author1
			};
		});

		// 抓取文章内容，限制并发数为 5，否则掉包严重。
		eachLimit(datas, 5, function (data, callback) {
			if (!data.url_author1) { // 没有评论的情况。
				ep.emit('user', [data, '']);
				return callback();
			}

			superagent.get(data.url_author1).end(function (err, res) {
				if (err) {
					return console.error('error:', data);
				}
				// console.log('fetch:', url);
				ep.emit('user', [data, res.text]);
				callback();
			});
		});

	});

	// 抓取文章内容，限制并发数为 5，否则掉包严重。
	eachLimit(topicUrls, 5, function (url, callback) {
		superagent.get(url).end(function (err, res) {
			if (err) {
				return console.error('error:', url);
			}
			// console.log('fetch:', url);
			ep.emit('topic_list', [url, res.text]);
			callback();
		});
	});

	// 用户抓取完成后处理
	ep.after('user', topicUrls.length, function (datas) {
		datas = datas.map(function (dt) {
			var $ = cheerio.load(dt[1]);

			return {
				title: dt[0].title,
				href: dt[0].title,
				comment1: dt[0].comment1, // 第一个回复内容
				author1: $('.dark').eq(0).text().trim(), // 评论者用户名
				score1: $('.user_profile .big').eq(0).text() // 评论者积分
			};
		});

		console.log(datas);
	});
});
