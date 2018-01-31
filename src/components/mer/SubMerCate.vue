<template>
  <div class="wrap">
    <!-- 封面轮播图 -->
    <div class="swiper-container common-swipe-wrap coverswiper">
        <div class="swiper-wrapper common-swipe">
            <div class="swiper-slide common-swipe-item" :key="subMerCateImg.order" v-for="subMerCateImg in subMerCateImgList">
                <img :src="subMerCateImg.imgAddress" class="common-swipe-item-img"/>
            </div>
        </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
 <!-- 封面轮播图 end-->
 <!-- 四方阁-->
 <div>
    <div class="fourbox" :key="subMerCate.subMerCateId"  v-for="subMerCate in subMerCateList">
        <a :href="subMerCate.link"  class="fourbox-item">
                <img class="fourbox-item-img" :src="subMerCate.imgAddress" alt="">
                <!-- <span class="box-item-text" v-text="subMerCate.name"> 
                </span>
                    -->
        </a>
    </div>
 </div>
 <!-- 四方阁-->

 <div class="division"></div>
 <!-- 精选活动-->
    <div>
        <div class="common-title-single-bold" >精选活动</div>
        <div class="twobox" style="margin-top:-6px;" :key="boutique.sboutiqueId"  v-for="boutique in boutiqueList">
            <a :href="boutique.link"  class="twobox-item">
                <img class="twobox-item-img" :src="boutique.imgAddress" alt="">
            </a>
        </div>
    </div>
<!--  精选活动 end-->
  <div class="division"></div>
 <!-- 超值热卖-->
     <div>
         <div class="common-title-single-bold" >超值热卖</div>
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
         <div class="mer2-wrap"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="2">
             <div class="mer2-item-wrap" v-for="likeMer in likeMerList">
                 <div class="mer2-item">
                    <img  class="mer2-item-img" v-lazy="likeMer.imgAddress" alt="">
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
@import '../../common/less/common.less';
    // @import '../../common/less/submercate.less';
</style>

<script>
import Swiper from 'swiper'
export default {
  name: 'SubMerImg',
  data () {
    return {
        //类型封面图片
        subMerCateImgList:[
            {subMerCateImgId:1,order:1,imgAddress:'https://img.gegejia.com/11e9db169b8c0.jpg'},
            {ssubMerCateImgId:2,order:2,imgAddress:'https://img.gegejia.com/c3a927ee5856.jpg'},
            {subMerCateImg:3,order:3,imgAddress:'https://img.gegejia.com/22f76e2f9f0e1.jpg'},
            {subMerCateImg:4,order:4,imgAddress:'https://img.gegejia.com/c3aaa1212e46.jpg'}
        ],
        //商品子类型 :备注，环球工厂的 图片含文字，如果我们做接口可以自己写文字
        subMerCateList:[
            {subMerCateId:1,merCateId:3,name:'人气面膜',imgAddress:'https://img.gegejia.com/dc473a248ec.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:2,merCateId:3,name:'精华面霜',imgAddress:'https://img.gegejia.com/3405007eff2c6.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:3,merCateId:3,name:'保湿水乳',imgAddress:'https://img.gegejia.com/22f76d6822279.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:3,merCateId:3,name:'量贩套盒',imgAddress:'https://img.gegejia.com/2e55cf777c3d4.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:3,merCateId:3,name:'彩妆香氛',imgAddress:'https://img.gegejia.com/22f76d6860ada.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:3,merCateId:3,name:'面部清洁',imgAddress:'https://img.gegejia.com/c3aa94a243fc.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:3,merCateId:3,name:'身体洗护',imgAddress:'https://img.gegejia.com/c3aa94a243fc.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:3,merCateId:3,name:'美容仪器',imgAddress:'https://img.gegejia.com/1d483c611e5a8.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'}
        ],
        //精选活动商品
        boutiqueList:[
            {
                boutiqueId:1,
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30835?gpm=0-48-51-67',
                imgAddress:'https://img.gegejia.com/28a71570387f9.jpg'
                },
            {
                boutiqueId:2,
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/29124?gpm=0-48-51-67',
                imgAddress:'https://img.gegejia.com/11ea5152d8240.jpg'
                },
            {
                boutiqueId:3,
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30835?gpm=0-48-51-67',
                imgAddress:'https://img.gegejia.com/68bef43ad993.jpg'
                },
            {
                boutiqueId:4,
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/29205?gpm=0-48-51-67',
                imgAddress:'https://img.gegejia.com/11ea5154598af.jpg'
                }
        ],
        //四方阁
        boxList:[
            {boxId:1,name:'会员专享',icon:require('../../common/img/c3aedbd5e5c3.png'),link:''},
            {boxId:2,name:'每日十荐',icon:require('../../common/img/dc8baee79b2.png'),link:''},
            {boxId:3,name:'环球工厂',icon:require('../../common/img/22f7b1dd1963b.png'),link:''},
            {boxId:4,name:'分类',icon:require('../../common/img/28a6e2e55a185.png'),link:'/#/merCate'},
            ],
        //精选活动
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
    //加载更多
    loadMore() {
    this.loading = true;

    setTimeout(() => {
        let sslikeMerList=[];
        for (let i = 1; i <= 10; i++) {
            sslikeMerList.push(this.likeMerList[0]);
        }
        sessionStorage.setItem("likeMerList",JSON.stringify(sslikeMerList));
        this.likeMerList=this.likeMerList.concat(JSON.parse(sessionStorage.getItem("likeMerList")))
        this.loading = false;
    }, 10);
    }

    },
     mounted() {
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

        //今日爆款、下期预告
        this.explosionswiper = new Swiper('.explosionswiper', {
             paginationClickable: true,
            freeMode : true,
            slidesPerView : 2.5
        });

        }
}
</script>

