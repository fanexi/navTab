<template>
  <div id="app">
    <layoutNav />
    <!-- <router-view class="routerView" /> -->
  </div>
</template>

<script>
import layoutNav from "@/components/layoutNav.vue";
export default {
  components: {
    layoutNav
  },
  data () {
    return {
      widHeight: 0
    }
  },
  created () {

  }
};
</script>  

<style lang="scss">
@import "./scss";
</style>
