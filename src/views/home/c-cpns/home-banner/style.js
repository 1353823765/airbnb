import styled from "styled-components";
//第一种引入图片的方式,如果直接在 background中的url直接写图片地址
//由于webpack的特性对我们代码进行打包找不到对应的路径显示不出来
//所以我们要先import导入图片再去进行设置
//background:url(${coverImg} center/cover
// import coverImg from "@/assets/img/home_banner_01.jpg";
//第2中方式用require来去引入图片在新版webpack中要加
export const BannerWapper=styled.div`
     height: 529px;
     /* 第二种引入图片的方式 */
  background:url(${require("@/assets/img/home_banner_01.jpg")}) center/cover  ; 

`