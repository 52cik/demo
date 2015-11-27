var async = require('async');

// 并发连接数的计数器
var concurrencyCount = 0;
var fetchUrl = function (url, callback) {
  // delay 的值在 2000 以内，是个随机的整数
  var delay = Math.random() * 2000 | 0;
  concurrencyCount++;
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');

  setTimeout(function () {
    concurrencyCount--;
    callback(null, url + ' html content');
  }, delay);
};


// 生成 30 个 url
var urls = [];
for(var i = 0; i < 30; i++) {
  urls.push('http://datasource_' + i);
}

// 并发数为5
async.mapLimit(urls, 5, function (url, cb) {
	fetchUrl(url, cb); // 抓取操作
}, function (err, datas) { // 处理完成
	console.log('完成:', datas);
});

