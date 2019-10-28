<template>
  <div class="layout">
    <!--左边的导航栏  -->
    <leftNav class="leftNav" />
    <rightNav class="rightNav" />
  </div>
</template>

<script>
import leftNav from "./leftNav";
import rightNav from "./rightNav";
export default {
  name: "HelloWorld",
  props: {},
  components: {
    leftNav,
    rightNav
  }
};
</script>


