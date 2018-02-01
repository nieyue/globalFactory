<!-- 商品类型详情 -->
<template>
  <div class="mercatedetailswrap">
    <!-- 封面轮播图 -->
    <div class="swiper-container common-swipe-wrap coverswiper">
        <div class="swiper-wrapper common-swipe">
            <div class="swiper-slide common-swipe-item" :key="merCateDetailsImg.order" v-for="merCateDetailsImg in merCateDetailsImgList">
                <img :src="merCateDetailsImg.imgAddress" class="common-swipe-item-img"/>
            </div>
        </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
 <!-- 封面轮播图 end-->
    <!-- 导航栏 -->
    <div class="swiper-container mercatedetailsnavbar-wrap mercatedetailsnavbarswiper" ref="mercatedetailsnavbar" :class="searchBarFixed?'fixedtop':0">
        <div class="swiper-wrapper mercatedetailsnavbar" >
            <div class="swiper-slide mercatedetailsnavbar-item" @click="selectMerCate(merCate)" v-for="merCate in merCateList" :key="merCate.merCateId" :class="{'mercatedetailsnavbar-item-active':merCate==currentMerCate}">
                <span class="mercatedetailsnavbar-item-text" :class="{'mercatedetailsnavbar-item-active-text':merCate==currentMerCate}">
                {{merCate.name}}
                </span>
            </div>
        </div>
    </div>
    <!-- 导航栏end -->
 <!-- 商品列表-->
     <div  v-for="merCate in merCateList" ref="merCate"  :id="'mercatedetailsnavbar'+merCate.merCateId">
         <div class="common-title-single"  >
             <!-- <span ></span> -->
              <img  style=" width:100%;":src="merCate.imgAddress"/>
         </div>
         <a class="mer2-wrap">
             <div class="mer2-item-wrap" v-for="mer in merCate.merList" @click="merClick(mer)" style="background-color:#fff;">
                 <div class="mer2-item">
                    <img  class="mer2-item-img" v-lazy="mer.imgAddress" alt="">
                    <span class="mer2-item-title" v-text="mer.title"></span>
                    <span class="mer2-item-pricewrap">
                        <span class="mer2-item-price2" >
                            ￥<span v-text="mer.price"></span>
                        </span>
                        <span class="mer2-item-oldprice2" >
                            ￥<span  v-text="mer.oldPrice"></span>
                        </span>
                    </span>
                 </div>
             </div>
         </a>
     </div>
<!--  商品列表 end-->
 
 </div>
</template>
<style lang="less" scope>
    @import '../../common/less/common.less';
    @import '../../common/less/mercatedetails.less';
</style>

<script>
import Swiper from 'swiper'
export default {
  name: 'MerCateDetails',
  data () {
    return {
        //顶部固定，默认不固定
        searchBarFixed:false,
        //轮播
        merCateDetailsImgList:[
            {merCateDetailsImgId:1,order:1,imgAddress:'https://img.gegejia.com/22f79a549765d.jpg'}
        ],
        //商品类型
        merCateList:[
            {merCateId:8,
            isfixed:0,
            name:'休闲零食',
            imgAddress:'https://img.gegejia.com/28a6cb567bf9c.jpg',
            merList:[]
            },
            {merCateId:4,
            isfixed:0,
            name:'滋补保健',
            imgAddress:'https://img.gegejia.com/c3ad632b7a1d.jpg',
            merList:[]
            },
            {merCateId:3,
            isfixed:0,
            name:'美妆护肤',
            imgAddress:'https://img.gegejia.com/dc7423e6063.jpg',
            merList:[]
            },
            {merCateId:7,
            isfixed:0,
            name:'乳饮酒速食',
            imgAddress:'https://img.gegejia.com/34052d69360ba.jpg',
             merList:[]
            },
            {merCateId:9,
            isfixed:0,
            name:'水果生鲜',
            imgAddress:'https://img.gegejia.com/68bb57d88598.jpg',
             merList:[]
            },
            {merCateId:5,
            isfixed:0,
            name:'母婴健康',
            imgAddress:"https://img.gegejia.com/34052d69e7a14.jpg",
             merList:[]
            }
        ],
        //当前商品类型
        currentMerCate:{},
        //商品列表
        merList:[
            {   
                merId:1,
                title:'大牌同款毛呢大衣女中长款S码',
                oldPrice:'398',price:'288',
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
                merId:4,
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
    this.currentMerCate=this.merCateList[0];
    this.merCateList.forEach((e)=>{
        e.merList=this.merList;
    });

    },
    methods:{
    //选择导航
    selectMerCate(merCate){
        this.currentMerCate=merCate;
     let anchor = this.$el.querySelector('#mercatedetailsnavbar'+merCate.merCateId)
        document.body.scrollTop = anchor.offsetTop
        },
      //点击
      merClick(mer){
          //this.$router.push(mer.link)
          location.href=mer.link
        },
    //监听滚动
     handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //var offsetTop = document.querySelector('#searchBar').offsetTop
        var offsetTop = this.$refs.mercatedetailsnavbar.offsetTop
        if (scrollTop > offsetTop) {
            this.searchBarFixed = true
        } else {
            this.searchBarFixed = false
        }
        }
    },
     mounted() {
        //导航
        let mercatedetailsnavbarswiper = new Swiper('.mercatedetailsnavbarswiper', {
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
    //监听元素在顶端
     window.addEventListener('scroll', this.handleScroll)
        },
        destroyed () {
        //移除监听
        window.removeEventListener('scroll', this.handleScroll)
        },
}
</script>