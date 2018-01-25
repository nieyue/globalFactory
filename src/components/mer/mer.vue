<!--商品详情-->
<template>
  <div class="wrap">
      <!-- 轮播图 -->
   <div >
        <mt-swipe class="slide-swipe" :auto="3000">
            <mt-swipe-item class="slide"  :key="merImg.order" v-for="merImg in mer.merImgList" >
                   <img :src="merImg.imgAddress" class="mer-img"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
 <!-- 轮播图 end-->
<!-- title -->
 <div class="wrap-title">
   <div>
        <span style="display:inline-block;width:78%;">
            <span style="overflow: hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;">
            <span v-text="mer.postage==0?'包邮':mer.postage" style="color:red;">
                </span>
                <span v-text="mer.name"  ></span>
            </span>
        </span>
        <span style="border-left:1px solid #ececec;padding:0 15px;display:inline-block;margin-top:-15px;">
                <img  class="heart-shape" src="https://wx.51bushou.com/ygg-hqbs/scripts/images/heart-black.png"/>
                <span >收藏</span>
        </span>
   </div>
  <div style="color:red;font-size:20px">
    ￥<span v-text="mer.oldPrice">
        </span>
   </div>
  <div style="color:#858585;font-size:12px">
      市场价￥<span v-text="mer.price">
        </span>
   </div>
</div>
   <div style="margin:0;padding:0;height:1px;width:100%;background-color:#ececec;"></div>
  <div style="font-size:12px;padding:5px 10px;">
      * 本产品由 品牌商 提供发货服务。
   </div>
<!-- title end-->
   <div style="margin:0;padding:0;height:15px;width:100%;background-color:#f2f3f4;"></div>
<!-- 品牌商广告-->
    <div class="brand-seller">
     <div>
         <a v-bind:href="mer.brandSeller.adLink">
             <img v-bind:src="mer.brandSeller.adImgAddress" style="width:100%;" alt="">
             </a>
     </div>
   </div>
<!-- 品牌商广告 end-->
   <div style="margin:0;padding:0;height:15px;width:100%;background-color:#f2f3f4;"></div>
<!-- 品牌商介绍-->
    <div style="padding:2%;">
        <span style="width:30%;display:inline;">
                <img  style="width:68px;" v-bind:src="mer.brandSeller.logo"/>
        </span>
        <span style="display:inline-block;width:70%;vertical-align:top;" v-text="mer.brandSeller.introduce"  ></span>
   </div>
<!-- 品牌商介绍 end-->
   <div style="margin:0;padding:0;height:15px;width:100%;background-color:#f2f3f4;"></div>
<!-- 品牌商简介-->
   <div style="padding:2%;">商品简介</div>
<div style="margin:0;padding:0;height:1px;width:100%;background-color:#ececec;"></div>
    <div style="padding:2%;">
        <div >
【品  牌】
        <span  v-text="mer.merDetail.brand"  ></span>
        </div>
        <div >
【规  格】
        <span  v-text="mer.merDetail.spec"  ></span>
        </div>
        <div >
【产  地】
        <span  v-text="mer.merDetail.originPlace"  ></span>
        </div>
        <div >
【存储方法】
        <span  v-text="mer.merDetail.storeMethod"  ></span>
        </div>
        <div >
【快递信息】
        <span  v-text="mer.merDetail.expressInformation"  ></span>
        </div>
        <div >
【服务信息】
        <span  v-text="mer.merDetail.serviceInformation"  ></span>
        </div>
   </div>
<!-- 品牌商简介 end-->
    <div style="margin:0;padding:0;height:15px;width:100%;background-color:#f2f3f4;"></div>
<!-- 商品详情-->
<div style="padding:2%;">商品详情</div>
<div style="margin:0;padding:0;height:1px;width:100%;background-color:#ececec;"></div>
    <div style="padding:2%;">
        <span v-html="mer.content"  class="mer-content"></span>
    </div>
<!-- 商品详情 end-->

<!-- 固定栏-->
<div class="mer-footer">
    <div class ="mer-footer-div" style="width:16%;left:0">
        <a href="https://wx.51bushou.com/ygg-hqbs/hqbsHomeInfo/getHomeInfo">
            <img src="https://wx.51bushou.com/ygg-hqbs/scripts/images/house02.png" alt="">
            <span>首页</span>
        </a>
    </div>
    <div class ="mer-footer-div" style="width:16%;left:16%">
        <a href="https://wx.51bushou.com/ygg-hqbs/hp/login.html?redirect_url=https%3A%2F%2Fwx.51bushou.com%2Fygg-hqbs%2Fproduct%2Fsingle%2F477961">
            <img src="https://wx.51bushou.com/ygg-hqbs/pages/images/cart_small.png" alt="">
            <span>购物车</span>
        </a>
    </div>
    <div class ="mer-footer-div" style="width:16%;left:32%">
        <a href="https://wx.51bushou.com/ygg-hqbs/hp/login.html?redirect_url=https%3A%2F%2Fwx.51bushou.com%2Fygg-hqbs%2Fproduct%2Fsingle%2F477961">
            <img src="https://wx.51bushou.com/ygg-hqbs/pages/images/kefu.png" alt="">
            <span>客服</span>
        </a>
    </div>
    <div class ="mer-footer-div" style="width:52%;left:48%">
        <a style="border-right:0; height:50px;" href="https://wx.51bushou.com/ygg-hqbs/hp/login.html?redirect_url=https%3A%2F%2Fwx.51bushou.com%2Fygg-hqbs%2Fproduct%2Fsingle%2F477961">
            <span style="line-height:50px;background-color:#000;color:#fff;height:50px;width:100%;top:0px;font-size:16px">加入购物车</span>
        </a>
    </div>
</div>
<!-- 固定栏 end-->

</div>
</template>

<script>
import '../../common/less/common.less'
export default {
  name: 'mer',
  data () {
    return {
      //商品信息
      mer:{
        //商品名称
        name:'balea玻尿酸防晒隔离霜魔幻完美妆前乳 30ml 提亮平滑肌肤改善肤质细致毛孔',
        //市场价
        oldPrice:158,
        //售价
        price:98,
        //邮费，必须大于等于0，0为包邮
        postage:0,
        //商品图片
        merImgList:[
            {merImgId:1,order:1,imgAddress:'https://img.gegejia.com/28a3a81e2d827.jpg!v1product'},
            {merImgId:2,order:2,imgAddress:'https://img.gegejia.com/11e6e3ffa1475.jpg!v1product'}
        ],
        //商品详情
        content:'<div><br><img src="https://img.gegejia.com/17960d5be3b9b.jpg!v1detail"><br><img src="https://img.gegejia.com/11e6e4004f9b3.jpg!v1detail"><br><img src="https://img.gegejia.com/28a3a81ece74a.jpg!v1detail"><br><img src="https://img.gegejia.com/11e6e4004f9b3.jpg!v1detail"><br><img src="https://img.gegejia.com/68881f10b664.jpg!v1detail"><br><img src="https://img.gegejia.com/17961507f50ad.jpg!v1detail"><br><img src="https://img.gegejia.com/22f4771777170.jpg!v1detail"><br><img src="https://img.gegejia.com/d950e99d699.jpg!v1detail"><br><img src="https://img.gegejia.com/34020a2e69cd7.jpg!v1detail"><br><img src="https://img.gegejia.com/11e6e4008cf98.jpg!v1detail"><br><img src="https://img.gegejia.com/22f477179101e.jpg!v1detail"><br><img src="http://yangege.b0.upaiyun.com/product/11e4a9a5f428c.png"></div>',
        //品牌商
        brandSeller:{
           brandSellerId:1,
           //广告链接
           adLink:'https://wx.51bushou.com/ygg-hqbs/product/single/503499?gpm=0-23',
           //广告图片
           adImgAddress:'https://img.gegejia.com/dc9795ee775.jpg',
           //标示图
           logo:'http://yangege.b0.upaiyun.com/product/1d3f735f4ebc1.png',
           //介绍
           introduce:'即时魔术，瞬间均匀皮肤，完成一个完美肤色：在按压几秒钟后瞬间抚平皱纹、毛孔、油光。特种陶瓷矿物颜料反射光线，并在数秒內使肤色展现完美状态，柔滑的配方赋予皮肤光滑柔和。对平滑肌肤和填补毛孔有明显效果。推开丝滑顺畅，强效控油，呈现亚光效果。',
           //品牌主页
           home:'https://wx.51bushou.com/ygg-hqbs/static/promise',
           //承诺图
           promiseImgAddress:'https://img.gegejia.com/product/11ea04a57f626.png',
        },
        //商品简介
        merDetail:{
          merDetailId:1,
          //品牌
          brand:'Balea芭乐雅',
          //规格
          spec:'30ml',
          //产地
          originPlace:'',
          //存储方法
          storeMethod:'阴凉',
          //快递信息
          expressInformation:'中通',
          //服务信息
          serviceInformation:'由品牌商从（美妆）发货'
        }
      }
    }
  }
}
</script>

<style >

/*
**标题
*/
.wrap-title{
    padding:15px;
}
/*
**心形
*/
.heart-shape{
    width:20px;
    height:18px;
    display: block;
    content:'';
    margin:0 auto 5px;
}
/*
**品牌商
*/
.brand-seller{
   
}
/*
**商品详情
*/
.mer-content{
  width:100% !important; 
}
.mer-content *{
  width:100% !important; 
}



</style>
