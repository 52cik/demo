Vue.component('home', {
  template: '<p>home page</p>'
});
Vue.component('list', {
  template: '<p>list page</p>'
});

Vue.use(VueRouter);

var app = new Vue({
  el: '#app',
  data: {
    currentView: 'home'
  }
});


// window.addEventListener('hashchange', function(e) {
//   var hash = location.hash.slice(2);
//   if (Vue.options.components[hash]) {
//     app.currentView = hash;
//   }
// }, false);

