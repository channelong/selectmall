<template>
  <div id="tab-bar">
    <tabbaritem path="/home" >
      <img slot="tab-icon" src="../../assets/img/tabbar/homepage.png">
      <img slot="tab-icon-sel" src="../../assets/img/tabbar/homepage-sel.png">
      <div slot="tab-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/category" >
      <img slot="tab-icon" src="../../assets/img/tabbar/category.png">
      <img slot="tab-icon-sel" src="../../assets/img/tabbar/category-sel.png">
      <div slot="tab-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/shopcart" >
      <img slot="tab-icon" src="../../assets/img/tabbar/basket.png">
      <img slot="tab-icon-sel" src="../../assets/img/tabbar/basket-sel.png">
      <div slot="tab-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/user" >
      <img slot="tab-icon" src="../../assets/img/tabbar/user.png">
      <img slot="tab-icon-sel" src="../../assets/img/tabbar/user-sel.png">
      <div slot="tab-text">我的</div>
    </tabbaritem>
  </div>
</template>

<script>
const tabbaritem = () => import('./tabbaritem')

export default {
  name: "tabbar",
  components: {
    tabbaritem
  }
}
</script>


<style scoped>
#tab-bar {
  display: flex;
  background: #f0f0f0;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);

  font-size: 12px;
}

</style>

