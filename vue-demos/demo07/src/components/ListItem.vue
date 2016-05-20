<template>
    <li>
      <span>{{item.title}}</span>
      <span class="remove" @click="removeItem(item)">x</span>
    </li>
</template>

<script>
export default {
  props: ['item'],

  methods: {
    removeItem(item) {
      this.$dispatch('remove-item', item);
    }
  }
}
</script>

<style scoped>
li {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}

li:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

li:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}

.remove {
  float: right;
  cursor: pointer;
}
</style>
