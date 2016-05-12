var MyComponent = Vue.extend({ // 创建组件
  template: '<div>第一个自定义组件</div>'
});

Vue.component('my-component', MyComponent); // 注册到全局


// 父子模块
var Child = Vue.extend({ // 创建子组件
  template: '<div>我是Child</div>'
});

var Parent = Vue.extend({ // 创建父组件
  template: '<h1>我是Parent</h1><child></child>',
  components: {
    // <Child> 只能用在父组件模板内
    'child': Child // 注册子组件
  }
});

Vue.component('Parent', Parent); // 注册到全局


// 父子模块简写
var Test = Vue.extend({
  template: '<h1>我是Test</h1><test-child></test-child>',
  components: {
    'test-child': {
      template: '<div>我是 Test-Child!</div>'
    }
  }
});

Vue.component('Test', Test); // 注册到全局


var app = new Vue({
  el: '#app',
});




var MyList = Vue.extend({ // 创建组件
  template: '<ul><my-li></my-li></ul>',
  components: {
    'my-li': {
      template: '<li>item<li>'
    }
  }
});

Vue.component('my-list', MyList); // 注册到全局

var list = new Vue({
  el: '#list',
});





new Vue({ // 模板嵌套时的内容发布
  el: '#slot',
  components: {
    app: { // App 组件
      template: '<slot></slot>',
    },
    'app-header': { // AppHeader 组件
      template: '<div><slot></slot> <p>我是header模板内容</p></div>',
    },
    'app-footer': { // AppFooter 组件
      template: '<div><slot></slot> <p>我是footer模板内容</p></div>',
    },
  }
});
