new Vue({
  el: '#app', // root 节点
  data: { // 数据
    messages: [],
  },
  events: { // 监听事件
    'child-msg': function(msg) {
      this.messages.push(msg);
    }
  },
  methods: { // 方法
    notify: function () {
      this.$broadcast('parent-msg', 'test'); // 广播事件，事件向下传导给所有的后代。
      console.log('子组件:', this.$refs.profile);
    },
    handleIt: function (msg) { // 声明式绑定监听事件，优先级高
      console.log('子节点:', msg);
      return true; // 允许冒泡，绑定的多个事件都触发
    }
  },
  components: { // 子组件
    child: {
      template: '<input v-model="msg"><button v-on:click="notify">Dispatch Event</button>',
      data: function () { // 数据
        return { msg: 'hello' };
      },
      events: { // 监听事件
        'parent-msg': function(msg) {
          console.log('父节点:', msg);
        }
      },
      methods: { // 方法
        notify: function () {
          if (this.msg.trim()) {
            this.$dispatch('child-msg', this.msg); // 派发事件，事件沿着父链冒泡；
            this.msg = '';
          }
        }
      }
    }
  }
});


// 注册子组件
// 将当前消息派发出去
Vue.component('child', {
  template: '#child-template',
  data: function () {
    return { msg: 'hello' }
  },
  methods: {
    notify: function () {
      if (this.msg.trim()) {
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
})

// 初始化父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
  el: '#events-example',
  data: {
    messages: []
  },
  // 在创建实例时 `events` 选项简单地调用 `$on`
  events: {
    'child-msg': function (msg) {
      // 事件回调内的 `this` 自动绑定到注册它的实例上
      this.messages.push(msg)
    }
  }
})


