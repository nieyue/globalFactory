<!-- 商品子类型 -->
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
 <!-- 今日限量秒杀-->
     <div>
         <div class="common-title-single-bold" >今日限量秒杀</div>
         <div class="mer3-wrap">
             <a :href="seckillMer.link" class="mer3-item-wrap" v-for="seckillMer in seckillMerList">
                 <img src="../../common/img/17982da1f4c63.jpg" class="mer3-icon" alt="">
                 <div class="mer3-item">
                    <img  class="mer3-item-img" v-lazy="seckillMer.imgAddress" alt="">
                    <span class="mer3-item-title" v-text="seckillMer.title"></span>
                    <span class="mer3-item-pricewrap">
                        <span class="mer3-item-price">
                            ￥<span v-text="seckillMer.price"></span>
                        </span>
                        <span class="mer3-item-oldprice">
                            ￥<span  v-text="seckillMer.oldPrice"></span>
                        </span>
                    </span>
                 </div>
             </a>
         </div>
     </div>
<!-- 今日限量秒杀 end-->
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
 <!-- 环球国家馆-->
     <div>
         <div class="common-title-single-bold" >环球国家馆</div>
         <!-- 国家-->
         <div class="mer3-wrap" style="width:100%;padding:0;" >
             <a :href="country.link" style="width:33.33%;margin:0;"  class="mer3-item-wrap" v-for="country in countryArray.countryList">
                 <div class="mer3-item">
                    <img  class="mer3-item-img" v-lazy="country.imgAddress" alt="">
                 </div>
             </a>
         </div>
         <!-- 国家 end-->
         <div  v-for="countryMer in countryArray.countryMerList">
         <!-- 封面-->
            <div class="common-single-wrap">
                <a :href="countryMer.cover.link" class="common-single">
                    <img  class="common-single-img" v-lazy="countryMer.cover.imgAddress" alt="">
                </a>
            </div>
         <!-- 封面 end-->

        <!-- 多个商品 -->
            <div class="swiper-container countryswiper mer-wrap" >
                <div class="swiper-wrapper">
                    <div class="swiper-slide mer-item-wrap" v-for="(mer,index) in countryMer.merList" :key="mer.merId" >
                        <div class="mer-item" >
                            <!-- <span  class="mer-item-img" :style="{backgroundImage:'url('+mer.imgAddress+')'}">
                            </span> -->
                             <img  class="mer-item-img"  v-lazy="mer.imgAddress" alt="">
                            <span class="mer-item-title" v-text="mer.title"></span>
                            <span class="mer-item-pricewrap">
                                <span class="mer-item-memberfont" v-if="countryMer.isShowMember==1">
                                    会员价
                                </span>
                                <span class="mer-item-memberprice"  v-if="countryMer.isShowMember==1">
                                    ￥<span  v-text="mer.memberPrice"></span>
                                </span>
                                <span class="mer-item-price" v-if="countryMer.isShowMember==2">
                                    ￥<span v-text="mer.price"></span>
                                </span>
                                <span class="mer-item-oldprice"  v-if="countryMer.isShowMember==2">
                                    ￥<span  v-text="mer.oldPrice"></span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="swiper-slide" style="margin-top:10%"  >
                         <a class="common-product-all-wrap" :href='countryMer.merAllLink'>
                             <div class="common-product-all-top">查看全部</div>
                             <div class="common-product-all-line"></div>
                             <div class="common-product-all-bottom">See All</div>
                         </a>
                    </div>
                </div>
            </div>
        <!-- 多个商品end -->
         </div>
     </div>

<!-- 环球国家馆 end-->

  <div class="division" style="text-align:center;padding:20px 0;font-weight:bold;font-size:1.2rem;">美妆TOP单品</div>
 <!-- 美妆TOP单品-->
     <div>
         <div class="mer3-wrap"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="2" style="background-color:#ececec;">
             <div class="mer3-item-wrap" style="background-color:#fff;" v-for="mer in merList">
                 <div class="mer3-item">
                    <img  class="mer3-item-img" v-lazy="mer.imgAddress" alt="">
                    <span class="mer3-item-title" v-text="mer.title"></span>
                    <span class="mer3-item-pricewrap">
                        <span class="mer3-item-price">
                            ￥<span v-text="mer.price"></span>
                        </span>
                        <span class="mer3-item-oldprice">
                            ￥<span  v-text="mer.oldPrice"></span>
                        </span>
                    </span>
                 </div>
             </div>
         </div>
     </div>
<!-- 美妆TOP单品 end-->
 
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
            {subMerCateId:4,merCateId:3,name:'量贩套盒',imgAddress:'https://img.gegejia.com/2e55cf777c3d4.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:5,merCateId:3,name:'彩妆香氛',imgAddress:'https://img.gegejia.com/22f76d6860ada.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:6,merCateId:3,name:'面部清洁',imgAddress:'https://img.gegejia.com/17990b594c9f7.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:7,merCateId:3,name:'身体洗护',imgAddress:'https://img.gegejia.com/c3aa94a243fc.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'},
            {subMerCateId:8,merCateId:3,name:'美容仪器',imgAddress:'https://img.gegejia.com/1d483c611e5a8.jpg',link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1627&APPOS=1&gpm=0-48-51-67'}
        ],
        //今日限量秒杀
        seckillMerList:[
            {
            seckillMerId:1,
            title:'OFRA 哑光雾面持久液体唇膏脏橘色南瓜色',
            oldPrice:'178',
            price:'128',
            link:'https://wx.51bushou.com/ygg-hqbs/product/single/405112?gpm=0-48-51-68',
            imgAddress:'https://img.gegejia.com/product/28a3be13aff5f.jpg'
            },
            {
            seckillMerId:2,
            title:'【1盒装】merbliss 白衣护士纱布面膜',
            oldPrice:'82',
            price:'59',
            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504091?gpm=0-48-51-68',
            imgAddress:'https://img.gegejia.com/1796ee4c39b53.jpg!v1product'
            },
            {
            seckillMerId:3,
            title:'纪梵希 4四格幻彩蜜粉/轻盈无痕明星散粉-2# 1',
            oldPrice:'480',
            price:'399',
            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504091?gpm=0-48-51-68',
            imgAddress:'https://img.gegejia.com/11e68ba152a7f.jpg!v1product'
            },
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
        //环球国家馆
        countryArray:{
            //国家
            countryList:[
                {countryId:1,
                imgAddress:'https://img.gegejia.com/17990c144f6ec.jpg',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/27524?gpm=0-48-51-67'
                },
                {countryId:2,
                imgAddress:'https://img.gegejia.com/3405013a9154e.jpg',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/27529?gpm=0-48-51-67'
                },
                {countryId:3,
                imgAddress:'https://img.gegejia.com/17990c146997a.jpg',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/27530?gpm=0-48-51-67'}
            ],
            //商品
            countryMerList:[
                {
                    //封面
                    cover:{
                      coverId:1,
                      imgAddress:'https://img.gegejia.com/22f76e60d3e28.jpg',
                      link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/29018?gpm=0-48-51-'  
                    },
                    //所有商品
                    merAllLink:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/29018?gpm=0-48-51-',
                    //显示会员还是正常价格 1会员，2正常
                    isShowMember:1,
                    //商品列表
                    merList:[
                        {
                            merId:1,
                            title:'Whoo后 津率享红华凝香精华洁面乳180ml',
                            imgAddress:'https://img.gegejia.com/seller/platform/all/c3af3dcbd5f8.jpg!v1product',
                            //会员价
                            memberPrice:'225.4',
                            oldPrice:'225.4',
                            price:'225.4',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:2,
                            title:'Whoo后 拱辰享雪玉凝泡沫洁面乳180ml',
                            imgAddress:'https://img.gegejia.com/seller/platform/all/c3af3e9f2d84.jpg!v1product',
                            //会员价
                            memberPrice:'216.2',
                            oldPrice:'225.4',
                            price:'225.4',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:3,
                            title:'Eaoron 水光洁面乳100ml',
                            imgAddress:'https://img.gegejia.com/product/dc64b8b3d9e.jpg!v1product',
                            //会员价
                            memberPrice:'72.68',
                            oldPrice:'225.4',
                            price:'225.4',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:4,
                            title:'伊思（its skin）红参蜗牛洗面奶150ml',
                            imgAddress:'https://img.gegejia.com/seller/platform/all/340544c8934f9.jpg!v1product',
                            //会员价
                            memberPrice:'81.88',
                            oldPrice:'225.4',
                            price:'225.4',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:5,
                            title:'whoo后 拱辰享 水妍泡沫洁面膏 180ml',
                            imgAddress:'https://img.gegejia.com/seller/platform/all/179935ce8d16c.jpg!v1product',
                            //会员价
                            memberPrice:'188.6',
                            oldPrice:'225.4',
                            price:'225.4',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:6,
                            title:'su:m37º呼吸 焕肤精粹温和洁面液 250ml',
                            imgAddress:'https://img.gegejia.com/product/22f79e62edc51.jpg!v1product',
                            //会员价
                            memberPrice:'170.2',
                            oldPrice:'225.4',
                            price:'225.4',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        }
                    ]  

                },
                {
                    //封面
                    cover:{
                      coverId:2,
                      imgAddress:'https://img.gegejia.com/22f6e35d54c8b.jpg',
                      link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/29018?gpm=0-48-51-'  
                    },
                    //所有商品
                    merAllLink:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=1772&APPOS=1&gpm=0-48-51-74',
                     //显示会员还是正常价格 1会员，2正常
                    isShowMember:2,
                    //商品列表
                    merList:[
                        {
                            merId:1,
                            title:'Whoo后 津率享红华凝香精华洁面乳180ml',
                            imgAddress:'https://img.gegejia.com/product/34021ffeedaa4.jpg!v1product',
                            //会员价
                            memberPrice:'225.4',
                            oldPrice:'2200',
                            price:'1066',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:2,
                            title:'Whoo后 拱辰享雪玉凝泡沫洁面乳180ml',
                            imgAddress:'https://img.gegejia.com/seller/platform/all/340438c96faf9.jpg!v1product',
                            //会员价
                            memberPrice:'216.2',
                            oldPrice:'4960',
                            price:'2800',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:3,
                            title:'Eaoron 水光洁面乳100ml',
                            imgAddress:'https://img.gegejia.com/1d45a25d7cf29.jpg!v1product',
                            //会员价
                            memberPrice:'72.68',
                            oldPrice:'580',
                            price:'420',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:4,
                            title:'伊思（its skin）红参蜗牛洗面奶150ml',
                            imgAddress:'https://img.gegejia.com/product/11e88f744bdf7.jpg',
                            //会员价
                            memberPrice:'81.88',
                            oldPrice:'98',
                            price:'69',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:5,
                            title:'whoo后 拱辰享 水妍泡沫洁面膏 180ml',
                            imgAddress:'https://img.gegejia.com/seller/platform/all/11e89bfe17de9.jpg!v1product',
                            //会员价
                            memberPrice:'188.6',
                            oldPrice:'210',
                            price:'139',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        },
                        {
                            merId:6,
                            title:'泰国Beauty Buffet 矿物定妆补水喷雾',
                            imgAddress:'https://img.gegejia.com/22f509c0daa08.jpg!v1product',
                            //会员价
                            memberPrice:'170.2',
                            oldPrice:'98',
                            price:'55',
                            link:'https://wx.51bushou.com/ygg-hqbs/product/single/504995?gpm=0-48-51-'
                        }
                    ]  

                }
            ]
        },
        //美妆TOP单品
        merList:[
            {
                merId:1,
                title:'大牌同款毛呢大衣女中长款S码',
                oldPrice:'398',
                price:'288',
                link:'https://wx.51bushou.com/ygg-hqbs/cms/index.html?cId=2277&APPOS=1&caid=1900&gpm=0-12',
                imgAddress:'https://img.gegejia.com/product/17994335d0faa.jpg!v1product'},
            {
                merId:2,
                title:'【1包装】欧扎克50%水果坚果麦片750g/包',
                oldPrice:'89',
                price:'55',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/c386fef30f39.jpg!v1product'
                },
            {
                merId:3,
                title:'【新农哥】年货坚果礼盒1502gx1盒 12袋干果',
                oldPrice:'105',
                price:'95',
                link:'https://wx.51bushou.com/ygg-hqbs/cnty/toac/30949?gpm=0-12',
                imgAddress:'https://img.gegejia.com/seller/platform/all/11ea3f1375900.jpg!v1product'
                },
            {
                merId:4,
                title:'【预售3天12袋装】科迪原生高钙牛奶180ml/袋',
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
this.currentMerCate=this.subMerCateList[0];


},
    methods:{
    //加载更多
    loadMore() {
    this.loading = true;

    setTimeout(() => {
        let sslikeMerList=[];
        for (let i = 1; i <= 10; i++) {
            sslikeMerList.push(this.merList[0]);
        }
        sessionStorage.setItem("merList",JSON.stringify(sslikeMerList));
        this.merList=this.merList.concat(JSON.parse(sessionStorage.getItem("merList")))
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
        this.countryswiper = new Swiper('.countryswiper', {
             paginationClickable: true,
            freeMode : true,
            slidesPerView : 3.5
        });

        }
}
</script>

