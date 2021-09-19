<template>
  <div class="tab-bar-item" @click="tabbarclick">
    <div v-if="!isActived">
      <slot name="tab-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-icon-sel"></slot>
    </div>
    <div :style="ActivedStyle">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: 'dodgerblue'
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    isActived() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    ActivedStyle() {
      return this.isActived ? {color: this.activecolor} : {};
    }
  },
  methods: {
    tabbarclick(event) {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1px;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

/*.active {
  color: dodgerblue;
}*/
</style>

