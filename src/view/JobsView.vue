<template>
  <ListItem>
    <template v-slot:title><div class="section-title">Jobs</div></template>
  </ListItem>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  }
}
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #5e594d;
  padding: 0.5rem 0px;
}
</style>

