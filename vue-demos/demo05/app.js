var MyComponent = Vue.extend({ // 创建组件
  template: '<div>第一个自定义组件</div>'
});
Vue.component('my-component', MyComponent); // 注册到全局



// 父子组件
var Child = Vue.extend({ // 创建子组件
  template: '<div>我是Child</div>'
});

var Parent = Vue.extend({ // 创建父组件
  template: '<h3>我是Parent</h3><child></child>',
  components: {
    Child: Child // 注册子组件
  }
});

Vue.component('Parent', Parent); // 父组件注册到全局



// 父子组件简写
var Test = Vue.extend({
  template: '<h3>我是Test</h3><test-child></test-child>',
  components: { // 注册子组件
    TestChild: {
      template: '<div>我是 Test-Child!</div>'
    }
  }
});

Vue.component('Test', Test); // 父组件注册到全局

// 上述全局组件只有在各个 vm 下生效

var app = new Vue({ // 创建 vm
  el: '#app',
});



// 创建列表组件
var MyList = Vue.extend({ // 创建组件
  template: '<ul><my-li v-for="n in 5">{{n + 1}}</my-li></ul>',
  components: {
    MyLi: {
      template: '<li>item-<slot></slot></li>'
    }
  }
});

Vue.component('my-list', MyList); // 注册到全局

// 或者属性传递
var MyList2 = Vue.extend({ // 创建组件
  template: '<ul><my-li v-for="it in 5" :item="it"></my-li></ul>',
  components: {
    MyLi: {
      props: ['item'],
      template: '<li>item-{{item + 1}}</li>'
    }
  }
});

Vue.component('my-list2', MyList2); // 注册到全局


var list = new Vue({
  el: '#list',
});




new Vue({ // 模板嵌套时的内容发布
  el: '#slot',
  components: {
    App: { // App 组件
      template: '<slot></slot>',
    },
    AppHeader: { // AppHeader 组件
      template: '<div> <slot></slot> <span>[我是header模板内容]</span> </div>',
    },
    AppFooter: { // AppFooter 组件
      template: '<div> <slot></slot> <span>[我是footer模板内容]</span> </div>',
    },
  }
});
