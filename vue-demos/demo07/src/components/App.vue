<template>
  <div class="app">
    <h1>hello {{msg}}!</h1>
    <input type="text" @keyup.enter="addItem" v-model="text" placeholder="输入并按回车">

    <app-list :list="list"></app-list>
  </div>
</template>

<script>
import AppList from './AppList.vue'

export default {
  data() {
    return {
      msg: 'vue',
      text: '',
      list: [
        {title: 'item-01'},
        {title: 'item-02'},
        {title: 'item-03'},
        {title: 'item-04'},
      ]
    }
  },

  methods: {
    addItem() {
      let text = this.text.trim()

      if (text != '') {
        this.list.push({ title: text})
        this.text = ''
      }
    }
  },

  components: {
    AppList
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.app {
  margin: auto;
  margin-top: 40px;
  padding: 40px 80px;
  width: 180px;
  border: 1px solid #ddd;
}

h1 {
  color: green;
  text-align: center;
  line-height: 2;
}

input {
  display: block;
  margin: auto;
  margin-bottom: 1em;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  color: #555;
}
</style>
