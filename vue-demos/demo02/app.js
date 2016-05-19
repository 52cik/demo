var app = new Vue({
  el: '#app',
  data: {
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
  app.list = [ // 修改数据
    {id:1, name: '001'},
    {id:2, name: '002'},
    {id:9, name: '03'},
    {id:4, name: '004'},
  ];

  Vue.nextTick(function () { // 下一个事件循环执行
    console.log('识别节点标识：');
    var li = document.querySelectorAll('ul>li');
    [].forEach.call(li, function (el, i) {
      console.log(el.test || '该节点被替换');
    });
  }, 0);
}, 2000);


