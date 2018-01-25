<template>
  <div >
<router-view></router-view>

    <!-- <mt-tabbar v-model="selected" class="tabbar"  >
            <mt-tab-item id="home">
                    <img slot="icon" src="@/common/img/bar_tb1.png">
                    首页
            </mt-tab-item>
            <mt-tab-item id="boutique" >
                <img slot="icon" src="@/common/img/bar_tb2_gray.png">
                店铺精选
            </mt-tab-item>
            <mt-tab-item id="cart" >
                <img slot="icon" src="@/common/img/bar_tb3_gray.png">
                购物袋
            </mt-tab-item>
            <mt-tab-item id="user" >
                <img slot="icon" src="@/common/img/bar_tb4_gray.png">
                个人中心
            </mt-tab-item>
    </mt-tabbar> -->
    <!-- 固定栏-->
<div class="mer-footer">
    <div class ="mer-footer-div" style="width:25%;left:0">
        <a @click="selectTab('/index/home')">
            <img src="@/common/img/bar_tb1.png" alt="">
            <span>首页</span>
        </a>
    </div>
    <div class ="mer-footer-div" style="width:25%;left:25%">
        <a @click="selectTab('/index/boutique')">
            <img src="@/common/img/bar_tb2_gray.png" alt="">
            <span>店铺精选</span>
        </a>
    </div>
    <div class ="mer-footer-div" style="width:25%;left:50%">
        <a  @click="selectTab('/index/cart')">
            <img src="@/common/img/bar_tb3_gray.png" alt="">
            <span>购物袋</span>
        </a>
    </div>
    <div class ="mer-footer-div" style="width:25%;left:75%">
        <a  @click="selectTab('/index/user')">
            <img src="@/common/img/bar_tb4_gray.png" alt="">
            <span>个人中心</span>
        </a>
    </div>
    
</div>
<!-- 固定栏 end-->

  </div>
</template>
<script>
    export default{
        name: 'Index',
        data () {
            return {
                selected:'home'
            }            
        },
    methods:{
        //导航
       selectTab(url){
           this.$router.push(url);
       }
        }

    }
</script>
<style lang="less">
@import "../common/less/common.less";
</style>
