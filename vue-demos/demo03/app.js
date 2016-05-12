var app = new Vue({
  el: '#app',
  data: {
    checkedNames: [],
    picked: [],
    selected: [],

    selected02: 'B',
    options02: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    toggleValue: '111',
    a:'111',
    b:'222',
  },
  methods: {
    click: function () {
      console.log(arguments);
    }
  },
});
