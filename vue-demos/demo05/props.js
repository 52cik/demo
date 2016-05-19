// Vue.component('child', { // 创建组件
//   props: ['myMessage'], // 驼峰命名
//   template: '<div>第一个自定义组件: {{myMessage}}!</div>'
// })
// var app = new Vue({
//   el: '#app',
//   data: {
//     parentMsg: 'hehe'
//   },
// });


// 简写为：

new Vue({
  el: '#app',

  data: {
    parentMsg: 'hehe'
  },

  components: {
    child: {
      props: [
        'myMessage', // 绑定父节点模型 parentMsg
        'someProp1', // 直接传递，字符串
        'someProp2', // 绑定测试，数字
      ],
      template: '<span>props 测试: {{myMessage}}!</span>'
    }
  }
});


new Vue({
  el: '#app2',

  components: {
    child: {
      props: {
        'someProp1': String, // 验证字符串
        'someProp2': {type: Number, required: true}, // 验证数字，必填
        'someProp3': {type: Number, validator: function (value) {
          return value > 10
        }}, // 验证数字，大于10
      },
      template: '<span>props 测试: {{someProp1}}, {{someProp2}}, {{someProp3}}!</span>'
    }
  }
});

