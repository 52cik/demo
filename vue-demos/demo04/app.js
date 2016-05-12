var app = new Vue({
  el: '#app',
  data: {
    show: true,
    transitionName: 'expand',
    animate_css: true,
  },
  transitions: {
    expand: {
      beforeEnter: function (el) {
        el.textContent = 'beforeEnter'
      },
      enter: function (el) {
        el.textContent = 'enter'
      },
      afterEnter: function (el) {
        el.textContent = 'afterEnter'
      },
      beforeLeave: function (el) {
        el.textContent = 'beforeLeave'
      },
      leave: function (el) {
        el.textContent = 'leave'
      },
      afterLeave: function (el) {
        el.textContent = 'afterLeave'
      }
    },
    bounce: {
      enterClass: 'bounceInLeft',
      leaveClass: 'bounceOutRight'
    },
    fade: {
      enterClass: 'fadeInDown',
      leaveClass: 'fadeOutDown'
    },
  },
});


var list = new Vue({
  el: '#list',
  data: {
    query: '',
    list: [
      {text: 'item-01'},
      {text: 'item-02'},
      {text: 'item-03'},
      {text: 'item-04'},
      {text: 'item-05'},
    ],
  },
  transitions: {
    fade: {
      enterClass: 'fadeInDown',
      leaveClass: 'fadeOutUp'
    },
  }
});
var list2 = new Vue({
  el: '#list2',
  data: {
    query: '',
    list: [
      {text: 'item-01'},
      {text: 'item-02'},
      {text: 'item-03'},
      {text: 'item-04'},
      {text: 'item-05'},
    ],
  }
});
