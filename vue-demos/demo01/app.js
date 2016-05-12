new Vue({
  el: '#app',
  data: {
    itemText: '',
    message: 'hello vue!',
    todos: [
      {text: 'item-01'},
      {text: 'item-02'},
      {text: 'item-03'},
      {text: 'item-04'},
    ],
  },
  methods: {
    order: function () { // 倒叙
      this.todos.reverse();
    },
    addItem: function () { // 添加项目
      if (!this.itemText) {
        return;
      }

      this.todos.push({text: this.itemText});
      this.itemText = '';
    },
    removeItem: function (idx) { // 删除当前项
      this.todos.splice(idx, 1);
    }
  }
});
