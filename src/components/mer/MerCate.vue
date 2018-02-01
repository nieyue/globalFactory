<!-- 商品类型 -->
<template>
  <div class="wrap">
    <!-- 搜索框 -->
    <div class="mercate-header">
        <router-link :to="{path:'/index/home'}" class="mercate-header-wrap">
            <img src="../../common/img/seach.png" class="mercate-header-search-img">
            <span class="mercate-header-search-text">搜索喜欢的宝贝</span>
        </router-link>            
    </div>
    <!-- 搜索框end -->
    <!-- 左边导航栏 -->
    <div class="swiper-container mercate-leftbar-wrap merCateswiper">
        <div class="swiper-wrapper mercate-leftbar">
            <div class="swiper-slide mercate-leftbar-item" @click="selectMerCate(merCate)" v-for="merCate in merCateList" :key="merCate.merCateId" :class="{'mercate-leftbar-item-active':merCate==currentMerCate}">
                {{merCate.name}}
            </div>
        </div>
    </div>
    <!-- 左边导航栏end -->
    <!-- 右边内容 -->
    <div class="mercate-rightbody-wrap">
    <!-- 封面轮播图 -->
        <div class="swiper-container common-swipe-wrap merImgswiper" style="margin:5%;width:90%;">
            <div class="swiper-wrapper common-swipe">
                <div class="swiper-slide common-swipe-item" :key="merImg.order" v-for="merImg in merCate.merImgList">
                    <img :src="merImg.imgAddress" class="common-swipe-item-img"/>
                </div>
            </div>
                <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        <!-- 封面轮播图 end-->
        <div class="common-title-wrap">
            <span class="common-title-line"></span>
            <span  class="common-title-text">热门品牌</span>
            <span class="common-title-line"></span>
        </div>
        <!-- 热门品牌-->
        <div>
            <div class="threebox" :key="brandSeller.brandSellerId"  v-for="brandSeller in merCate.brandSellerList">
                <div class="threebox-item">
                    <a :href="brandSeller.link">
                        <img class="threebox-item-img" :src="brandSeller.logo" alt="">
                        <span class="threebox-item-text" v-text="brandSeller.title">
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <!--  热门品牌 end-->
        <div class="common-title-wrap">
            <span class="common-title-line"></span>
            <span  class="common-title-text">分类</span>
            <span class="common-title-line"></span>
        </div>
        <!-- 商品子类-->
        <div>
            <div class="threebox" :key="subMerCate.subMerCateId"  v-for="subMerCate in merCate.subMerCateList">
                <a :href="subMerCate.link" class="threebox-item">
                    <img class="threebox-item-img" :src="subMerCate.icon" alt="">
                    <span class="threebox-item-text" v-text="subMerCate.name">
                    </span>
                </a>
            </div>
        </div>
        <!--  商品子类 end-->
    </div>
    <!-- 右边内容 -->
 </div>
</template>
<style lang="less" scope>
    @import '../../common/less/common.less';
    @import '../../common/less/mercate.less';
</style>

<script>
import Swiper from 'swiper'
export default {
  name: 'MerCate',
  data () {
    return {
        //商品类型
        merCateList:[
            {merCateId:3,isfixed:0,name:'美妆护肤'},
            {merCateId:4,isfixed:0,name:'滋补保健'},
            {merCateId:5,isfixed:0,name:'母婴健康'},
            {merCateId:6,isfixed:0,name:'百货轻奢'},
            {merCateId:7,isfixed:0,name:'乳饮酒速食'},
            {merCateId:8,isfixed:0,name:'休闲零食'},
            {merCateId:9,isfixed:0,name:'水果生鲜'}
        ],
        //当前商品类型
        currentMerCate:{},
        merCate:{
        merCateId:3,
            //商品图片
            merImgList:[
                {homeImgId:1,order:1,imgAddress:'https://img.gegejia.com/1d48acb50d43f.jpg'},
                {homeImgId:2,order:2,imgAddress:'https://img.gegejia.com/11ea4c03b3604.jpg'}
            ],
        //热门品牌
        brandSellerList:[
        //品牌商
            {
           brandSellerId:1,
           title:'传承百年的世界名点',
           //广告链接
           link:'https://wx.51bushou.com/ygg-hqbs/sm/bd.html?id=332&accountid=0&ft=0&gpm=0-18',
           //标示图
           logo:'http://yangege.b0.upaiyun.com/brand/2e4e72187c19e.jpg',

        }, {
           brandSellerId:2,
           title:'韩国火爆人气王零食',
           //广告链接
           link:'https://wx.51bushou.com/ygg-hqbs/sm/bd.html?id=330&accountid=0&ft=0&gpm=0-18',
           //标示图
           logo:'http://yangege.b0.upaiyun.com/brand/2e4e721a4ae14.jpg',

        }, {
           brandSellerId:3,
           title:'台湾超人气经典零食',
           //广告链接
           link:'https://wx.51bushou.com/ygg-hqbs/sm/bd.html?id=89&accountid=0&ft=0&gpm=0-18',
           //标示图
           logo:'http://yangege.b0.upaiyun.com/brand/1d4334e3acec4.jpg',

        }, {
           brandSellerId:4,
           title:'天然轻奢坚果仁时代',
           //广告链接
           link:'https://wx.51bushou.com/ygg-hqbs/sm/bd.html?id=760&accountid=0&ft=0&gpm=0-18',
           //标示图
           logo:'http://yangege.b0.upaiyun.com/brand/1d40d1ad8723f.jpg',

        }],
        //商品子类型
        subMerCateList:[
            {subMerCateId:3,
            name:'坚果炒货',
            icon:'http://yangege.b0.upaiyun.com/1d43d32a4ec47.png',
            link:'https://wx.51bushou.com/ygg-hqbs/sm/sc.html?id=1&type=7&fId=23&accountid=0&gpm=0-18'
            },
            {subMerCateId:4,
            name:'饼干蛋糕',
            icon:'http://yangege.b0.upaiyun.com/6870f19721e2.png',
            link:'https://wx.51bushou.com/ygg-hqbs/sm/sc.html?id=4&type=7&fId=23&accountid=1279837331&gpm=0-18'
            },
            {subMerCateId:5,
            name:'麦片',
            icon:'https://img.gegejia.com/22f5650d5d049.jpg',
            link:'https://wx.51bushou.com/ygg-hqbs/sm/sc.html?id=81&type=7&fId=23&accountid=1279837331&gpm=0-18'
            },
            {subMerCateId:6,
            name:'蜜饯果干',
            icon:'http://yangege.b0.upaiyun.com/c3640213bb1e.png',
            link:'https://wx.51bushou.com/ygg-hqbs/sm/sc.html?id=5&type=7&fId=23&accountid=1279837331&gpm=0-18'
            },
            {subMerCateId:7,
            name:'五谷冲饮',
            icon:'https://img.gegejia.com/28a496168c21e.png',
            link:'https://wx.51bushou.com/ygg-hqbs/sm/sc.html?id=83&type=7&fId=23&accountid=1279837331&gpm=0-18'
            },
            {subMerCateId:8,
            name:'糖果布丁',
            icon:'http://yangege.b0.upaiyun.com/c364022f6887.png',
            link:'https://wx.51bushou.com/ygg-hqbs/sm/sc.html?id=8&type=7&fId=23&accountid=1279837331&gpm=0-18'
            },

        ]

        }
     }
    },
    created(){
//初始化
this.currentMerCate=this.merCateList[0];


},
    methods:{
    //选择商品类型
    selectMerCate(merCate){
        this.currentMerCate=merCate;
    }
    },
     mounted() {
        //左侧导航
        let merCateswiper = new Swiper('.merCateswiper', {
            paginationClickable: true,
            freeMode : true,
            direction : 'vertical',
            slidesPerView : 'auto'
        });
        //封面轮播
        let merImgswiper = new Swiper('.merImgswiper', {
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

        }
}
</script>

