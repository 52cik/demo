var app = new Vue({
  el: '#app',
  data: {
    name: '',
    order: 'id',
    list: [
      {id:1, name: '01'},
      {id:2, name: '02'},
      {id:3, name: '03'},
      {id:4, name: '04'},
    ],
  }
});

console.log('为节点添加标识：');
var li = document.querySelectorAll('ul>li');
[].forEach.call(li, function (el, i) {
  el.test = 'item-' + i;
  console.log(el.test);
});

setTimeout(function () {
  app.list = [
    {id:1, name: '001'},
    {id:2, name: '002'},
    {id:9, name: '03'},
    {id:4, name: '004'},
  ];

  setTimeout(function () {
    console.log('识别节点标识：');
    var li = document.querySelectorAll('ul>li');
    [].forEach.call(li, function (el, i) {
      console.log(el.test || '无法识别');
    });
  }, 0);
}, 2000);


