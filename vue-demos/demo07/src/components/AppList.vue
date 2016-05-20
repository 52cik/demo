<template>
  <ul>
    <list-item v-for="it of list" :item="it"></list-item>
  </ul>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  props: ['list'],

  methods: {
    removeItem(item) {
      this.list.$remove(item);
    }
  },

  events: {
    'remove-item': function (item) {
      this.removeItem(item);
    }
  },

  components: {
    ListItem
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
