<template>
  <div class="wrap margin-bottom50">
    <div class="index-header">
        <span class="index-header-center">
            <img src="../../common/img/logo.png" class="index-header-center-img" slot="icon">
          
        </span>
            <router-link :to="{path:'/index/home'}" class="index-header-search">
                <img src="../../common/img/search_white.png" class="index-header-search-img">
            </router-link>
                    
    </div>

    <!-- 导航栏 -->
    <div class="swiper-container navbar-wrap navbarswiper">
        <div class="swiper-wrapper navbar">
            <div class="swiper-slide navbar-item" v-for="merCate in merCateList" :key="merCate.merCateId" :class="{'navbar-item-active':merCate==currentMerCate}">
                {{merCate.name}}
            </div>
        </div>
    </div>
    <!-- 导航栏end -->
    <!-- 封面轮播图 -->
    <div class="swiper-container index-swipe coverswiper">
        <div class="swiper-wrapper navbar">
            <div class="swiper-slide slide" :key="homeImg.order" v-for="homeImg in homeImgList">
                <img :src="homeImg.imgAddress" class="home-img"/>
            </div>
        </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
 <!-- 封面轮播图 end-->
 <!-- 通知-->
    <div class="notice">
        <span class="notice-left" >
                <img  class="notice-left-img"   src="../../common/img/11e6188ae462e.jpg"/>
        </span>
         <div class="swiper-container noticeswiper notice-right">
            <div class="swiper-wrapper ">
                <div class="swiper-slide " v-for="notice in noticeList" :key="notice.noticeId" >
                    <span class="notice-right-name"   v-text="notice.name"></span>
                    <span  class="notice-right-value" v-text="notice.value"></span>
                </div>
            </div>
        </div>
   </div>
<!-- 通知 end-->
 <!-- 四方阁-->
 <div>
        <div class="box" :key="box.boxId"  v-for="box in boxList">
            <div class="box-item">
                <img class="box-item-img" :src="box.icon" alt="">
                <span class="box-item-text" v-text="box.name">
                </span>
            </div>
        </div>
 </div>
 <!-- 四方阁-->
<div class="division"></div>
<!-- 今日爆款、下期预告 -->
    <div class="explosion-wrap"> 
        <div class="explosion-title-wrap" >
            <span class="explosion-title" @click="getExplosion(0)" :class="{'explosion-title-active':explosionTitleActive==0}">今日爆款</span>
            <span >|</span>
            <span class="explosion-title" @click="getExplosion(1)" :class="{'explosion-title-active':explosionTitleActive==1}">下期预告</span>
        </div>
        <div class="swiper-container explosionswiper mer-wrap">
            <div class="swiper-wrapper">
                <div class="swiper-slide mer-item-wrap" v-if="index<5" v-for="(explosionMer,index) in explosionMerList" :key="explosionMer.explosionMerId" >
                    <div class="mer-item" >
                        <img  class="mer-item-img" :src="explosionMer.imgAddress" alt="">
                        <span class="mer-item-title" v-text="explosionMer.title"></span>
                        <span class="mer-item-pricewrap">
                            <span class="mer-item-price">
                                ￥<span v-text="explosionMer.price"></span>
                            </span>
                            <span class="mer-item-oldprice">
                                ￥<span  v-text="explosionMer.oldPrice"></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class=" vertical-line-wrap">
                    <span class="vertical-line-title">下期预告</span>
                    <div class="vertical-line"></div>
                </div>
                <div class="swiper-slide mer-item-wrap" v-if="index>=5" v-for="(explosionMer,index) in explosionMerList" :key="explosionMer.explosionMerId" >
                    <div class="mer-item" >
                        <img  class="mer-item-img" :src="explosionMer.imgAddress" alt="">
                        <span class="mer-item-title" v-text="explosionMer.title"></span>
                        <span class="mer-item-pricewrap">
                            <span class="mer-item-price">
                                ￥<span v-text="explosionMer.price"></span>
                            </span>
                            <span class="mer-item-oldprice">
                                ￥<span  v-text="explosionMer.oldPrice"></span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="swiper-slide"></div>
            </div>
        </div>
    </div>
<!-- 今日爆款、下期预告end -->

 <div class="division"></div>
 <!-- 广告位-->
    <div>
        <div class="ad">
         <a class="ad-a-lg"  href="#">
             <img class="ad-img" v-bind:src="ad.arr[0].imgAddress" >
         </a>
         <a class="ad-a-sm"  href="#">
             <img class="ad-img" v-bind:src="ad.arr[1].imgAddress" >
         </a>
         <a class="ad-a-sm" href="#">
             <img class="ad-img" v-bind:src="ad.arr[2].imgAddress" >
         </a>
        </div>
        <div class="ad" style="margin-top:-6px;"> 
         <a class="ad-a-lg" href="#">
             <img class="ad-img" v-bind:src="ad.arr[3].imgAddress" >
         </a>
         <a class="ad-a-sm"  href="#">
             <img class="ad-img" v-bind:src="ad.arr[4].imgAddress" >
         </a>
         <a class="ad-a-sm"  href="#">
             <img class="ad-img" v-bind:src="ad.arr[5].imgAddress" >
         </a>
        </div>
         <a class="ad" v-bind:href="ad.single.link">
             <img class="ad-img" v-bind:src="ad.single.imgAddress" >
         </a>
   </div>
<!--  广告位 end-->
  <div class="division"></div>
 <!-- 超值热卖-->
     <div>
         <div class="hot-title" >超值热卖</div>
         <a class="hot" :key="hot.hotId"  v-for="hot in hotList" v-bind:href="hot.link">
             <img class="hot-img" v-bind:src="hot.imgAddress" alt="">
             <span class="hot-content">
                 <span  class="hot-content-title" v-text="hot.title"></span>
                 <span  class="hot-content-subtitle" v-text="hot.subtitle"></span>
                 <span class="hot-content-price" v-if="hot.price!=''">
                 ￥<span   v-text="hot.price"></span>起
                 </span>
             </span>
        </a>
     </div>
<!-- 超值热卖 end-->
  <div class="division"></div>
 <!-- 猜你喜欢-->
     <div>
         <div class="hot-title" >猜你喜欢</div>
         <div class="mer2-wrap">
             <div class="mer2-item-wrap" v-for="likeMer in likeMerList">
                 <div class="mer2-item">
                    <img  class="mer2-item-img" :src="likeMer.imgAddress" alt="">
                    <span class="mer2-item-title" v-text="likeMer.title"></span>
                    <span class="mer2-item-pricewrap">
                        <span class="mer2-item-price">
                            ￥<span v-text="likeMer.price"></span>
                        </span>
                        <span class="mer2-item-oldprice">
                            ￥<span  v-text="likeMer.oldPrice"></span>
                        </span>
                    </span>
                    <div class="mer2-item-tag-wrap">
                    <span class="mer2-item-tag"  v-for="tag in likeMer.tagList" v-text="tag.name"></span>
                    </div>
                 </div>
             </div>
         </div>
     </div>
<!-- 猜你喜欢 end-->
 
 </div>
</template>
<style lang="less" scope>
    @import '../../common/less/home.less';
</style>

<script>
import Swiper from 'swiper'
export default {
  name: 'Home',
  data () {
    return {
        //商品类型
        merCateList:[
            {merCateId:1,name:'首页'},
            {merCateId:2,name:'年货礼盒'},
            {merCateId:3,name:'美妆护肤'},
            {merCateId:4,name:'滋补保健'},
            {merCateId:5,name:'母婴健康'},
            {merCateId:6,name:'百货轻奢'},
            {merCateId:7,name:'乳饮酒速食'},
            {merCateId:8,name:'休闲零食'},
            {merCateId:9,name:'水果生鲜'},
            {merCateId:10,name:'环球物料'}
        ],
        //当前商品类型
        currentMerCate:{},
        //商品图片
        homeImgList:[
            {homeImgId:1,order:1,imgAddress:'https://img.gegejia.com/1d48acb50d43f.jpg'},
            {homeImgId:2,order:2,imgAddress:'https://img.gegejia.com/11ea4c03b3604.jpg'}
        ],
        //通知
        noticeList:[
            {noticeId:1,name:'环球捕手',value:'通知好礼'},
            {noticeId:2,name:'环球捕手提示',value:'防骗声明'}
            ],
        //今日爆款、下期预告当前点击，默认0，
        explosionTitleActive:0,
        explosionswiper:null,//swiper接受对象
        explosionMerList:[
            {
                explosionMerId:1,
                title:'大牌同款毛呢大衣女中长款S码',
                tagList:[{tagId:1,name:'新品'}],
                oldPrice:'398',price:'288',
                link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2277&APPOS=1&caid=1900&gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/1799531005bd0.jpg!v1product'},
            {
                explosionMerId:2,
                title:'【1包装】欧扎克50%水果坚果麦片750g/包',
                tagList:[
                    {tagId:2,name:'特卖'},
                    {tagId:3,name:'热销'}
                    ],
                oldPrice:'89',
                price:'55',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/c386fef30f39.jpg!v1product'
                },
            {
                explosionMerId:3,
                title:'【新农哥】年货坚果礼盒1502gx1盒 12袋干果',
                tagList:[
                    {tagId:4,name:'特卖'}
                    ],
                oldPrice:'105',
                price:'95',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/seller/platform/all/11ea3f1375900.jpg!v1product'
                },
            {
                explosionMerId:4,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                },
            {
                explosionMerId:5,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                },
            {
                explosionMerId:6,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                },
            {
                explosionMerId:7,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                },
            {
                explosionMerId:8,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                },
            {
                explosionMerId:9,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                },
            {
                explosionMerId:10,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                }
        ],
        //四方阁
        boxList:[
            {boxId:1,name:'会员专享',icon:require('../../common/img/c3aedbd5e5c3.png')},
            {boxId:2,name:'每日十荐',icon:require('../../common/img/dc8baee79b2.png')},
            {boxId:3,name:'环球工厂',icon:require('../../common/img/22f7b1dd1963b.png')},
            {boxId:4,name:'分类',icon:require('../../common/img/28a6e2e55a185.png')},
            ],
        //广告
        ad:{
            single:{
            adId:7,link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2549&APPOS=1&caid=2112&gpm=0',imgAddress:require('../../common/img/1d48aae9fc53a.jpg')
            },
            arr:[
                {adId:1,link:"https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2549&APPOS=1&caid=2112&gpm=0",imgAddress:require('../../common/img/dcb7b0816d1.jpg')},
                {adId:2,link:"https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2549&APPOS=1&caid=2112&gpm=0",imgAddress:require('../../common/img/1d48adfaf4a68.jpg')},
                {adId:3,link:"https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2549&APPOS=1&caid=2112&gpm=0",imgAddress:require('../../common/img/11ea4bf471974.jpg')},
                {adId:4,link:"https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2549&APPOS=1&caid=2112&gpm=0",imgAddress:require('../../common/img/22f7ddde7de3d.jpg')},
                {adId:5,link:"https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2549&APPOS=1&caid=2112&gpm=0",imgAddress:require('../../common/img/68be57d9cad8.jpg')},
                {adId:6,link:"https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2549&APPOS=1&caid=2112&gpm=0",imgAddress:require('../../common/img/dcb7b84cc1d.jpg')},
            ]
        },
        //超值热卖
        hotList:[
            {hotId:1,title:'年货礼盒专场',subtitle:'春节送礼必备佳品',price:'',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2277&APPOS=1&caid=1900&gpm=0-12',imgAddress:'https://img.gegejia.com/68be9056401c.jpg'},
            {hotId:2,title:'大寒后立春前',subtitle:'晒晒腊味等过年',price:'23.8',link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',imgAddress:'https://img.gegejia.com/28a703a861ecd.jpg'}
        ],
        //猜你喜欢
        likeMerList:[
            {
                likeMerId:1,
                title:'大牌同款毛呢大衣女中长款S码',
                tagList:[{tagId:1,name:'新品'}],
                oldPrice:'398',price:'288',
                link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2277&APPOS=1&caid=1900&gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/17994335d0faa.jpg!v1product'},
            {
                likeMerId:2,
                title:'【1包装】欧扎克50%水果坚果麦片750g/包',
                tagList:[
                    {tagId:2,name:'特卖'},
                    {tagId:3,name:'热销'}
                    ],
                oldPrice:'89',
                price:'55',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/c386fef30f39.jpg!v1product'
                },
            {
                likeMerId:4,
                title:'【新农哥】年货坚果礼盒1502gx1盒 12袋干果',
                tagList:[
                    {tagId:4,name:'特卖'}
                    ],
                oldPrice:'105',
                price:'95',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/seller/platform/all/11ea3f1375900.jpg!v1product'
                },
            {
                likeMerId:4,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
                tagList:[
                    {tagId:5,name:'特卖'},
                    {tagId:6,name:'热销'}
                    ],
                oldPrice:'39',
                price:'29',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/22f69f788c935.jpg!v1product'
                },
        ]
     }
    },
    created(){
//初始化
this.currentMerCate=this.merCateList[0];
},
    methods:{
    //点击导航栏
    clickNavbar(merCate){
    console.log(merCate)
    },
    //点击今日爆款、下期预告
    getExplosion(explosionTitleActive){
        this.explosionTitleActive=explosionTitleActive;
        this.explosionswiper.slideTo(5*explosionTitleActive,1000,false)
    }
    },
     mounted() {
        //导航
        let navbarswiper = new Swiper('.navbarswiper', {
            paginationClickable: true,
            freeMode : true,
            slidesPerView : 'auto'
        });
        //封面轮播
        let coverswiper = new Swiper('.coverswiper', {
            paginationClickable: true,
            //pagination: '.swiper-pagination',
            loop : true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                //type: 'fraction',
               // type : 'progressbar',
                //type : 'custom',
            },
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        });
        //navbarswiper.controller.control=coverswiper;
       // coverswiper.controller.control=navbarswiper;
        //通知
        let noticeswiper = new Swiper('.noticeswiper', {
            paginationClickable: true,
            loop : true,
            direction : 'vertical',
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        });
        //今日爆款、下期预告
        this.explosionswiper = new Swiper('.explosionswiper', {
             paginationClickable: true,
            freeMode : true,
            slidesPerView : 2.5
        });

        }
}
</script>

