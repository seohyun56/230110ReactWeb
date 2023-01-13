import styled from "styled-components";

const path = process.env.PUBLIC_URL;

// Nav.js
export const NavStyle =styled.nav`
    
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 100%;
    padding: 0 44px;

    z-index: 999;

    .nav_menu {
        background-color: #fff;
        text-indent: -9999px;
        width: 100%; 
        height: 210px;
        position: absolute;
        left: 0; top: 100px;
        opacity: 0;
        pointer-events: none;
    }
    
    :hover {
        background-color: #fff;
        border-bottom-color: #eee;
    }
    :hover .nav_menu {
        opacity: 1;
    }
    :hover h1 img {
        opacity: 0;
    }
    :hover h1 {
        background: url(${path}/images/logoHover.png) no-repeat 50%;
    }
    /* 메뉴 버튼 */
    .menu_btn {
        font-size: 1.8em;
        margin: 10px 100px 10px 0;
        color: #fff;
        cursor: pointer;
    }
    :hover .menu_btn {
        color: #000;
    }
    
    #gnb {
        display: flex;
    }
    #gnb > li {
        position: relative;
    }

    /* 대메뉴 제목 */
    #gnb > li > a {
        height: 100px;
        line-height: 100px;
        padding: 0 40px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
    }
    :hover #gnb > li > a {
        color: #000;
    }

    /* 소메뉴 */
    #gnb .sub_menu {
        text-align: center;
        background-color: #fff;
        width: 100%; 
        padding-top: 40px;
        position: absolute;
        left: 0; top: 101px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        opacity: 0;
        pointer-events: none;
    }
    #gnb .sub_menu a {
        font-size: 15px;
        padding-bottom: 14px;
        color: #7B7B7B;
    }
    #gnb .sub_menu a:hover {
        color: #458FDB;
        font-weight: 500;
    }
    :hover #gnb > li .sub_menu {
        opacity: 1;
        pointer-events: all
    }
`;
export const NavMenu = styled.div`
    /* 메뉴 버튼 */
    position: relative;
    z-index: 9999;

    #toggleMenu {
        position: fixed;
        background-color: #fff;
        top: 0;
        right: -25%;
        width: 25%;
        height: 100%;
        transition: 0.4s;
    }
    #toggleMenu.on {
        right: 0;
    }
    #toggleMenu .close_btn {
        position: absolute;
        font-size: 1.8em;
        top: 35px; right: 55px;
        cursor: pointer;
    }
    #toggleMenu > ul {
        list-style: none;
        padding: 110px 10px;
    }
    #toggleMenu ul a {
        color: #555;
        width: 60%;
        margin: 0 auto;
        padding: 20px 10px;
        border-bottom: 1px solid #eee;
        text-align: justify;
        font-size: 30px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.3s;
    }
    #toggleMenu > ul .toggleSub {
        font-size: 15px;
    }
    #toggleMenu ul a:hover {
        color: #458FDB;
    }
    /* toggle sub menu */
    #toggleMenu #toggleSubMenu {
        display: none;
        transition: 0.3s;
    }
    #toggleMenu #toggleSubMenu.toggle {
        display: block;
    }
    #toggleMenu #toggleSubMenu a {
        font-size: 15px;
        border: none;
        padding: 10px 0;
    }
    #toggleMenu #toggleSubMenu li:nth-child(1) a {
        padding-top: 30px;
    }
`;

// Header.js
export const HeaderStyle = styled.header`

    .swiper-button-prev, .swiper-button-next {
        color: transparent;
    }

    .swiper-pagination-bullet {
        width: 50px; height: 3px;
        border-radius: 0;
        border: 1px solid #fff;
        background-color: transparent;
    }
    .swiper-pagination-bullet-active {
        background-color: royalblue;
        border-color: transparent;
    }

    height: 760px;

    h2 {
        position: absolute;
        top: 50%; left: 13%;
        transform: translateY(-50%);
        color: #fff;
        font-size: 60px;
        font-weight: 500;
    }
    p {
        position: absolute;
        top: 63%; left: 13%;
        transform: translateY(-63%);
        color: #eee;
        line-height: 1.5;
        font-size: 18px;
        text-shadow: 0 1px 2px rgb(0 0 0 / 20%);
    }
`;

// Service.js
export const ServiceStyle = styled.article`

    padding: 85px 0;

    ul {
        display: flex;
        justify-content: center;
        margin-top: 60px;
        cursor: pointer;
    }
    ul li {
        width: 325px;
        padding: 10px;
    }
    ul li h3 {
        font-size: 20px;
        font-weight: 500;
        text-align: left;
        padding: 20px 0 0 5px;
    }
    ul li p {
        font-size: 14px;
        color: #777;
        text-align: left;
        padding: 10px 0 0 5px;
        /* padding-top: 10px; */
        line-height: 1.3;
    }
    ul li:hover .imgScale img {
        filter: grayscale(80%);
        transform: scale(1.07);
    }
`;

// ViewDetails.js
export const ViewDetailStyle = styled.article`
    background: url(${path}/images/viewdetail.jpg) no-repeat 50% / cover;
    padding: 180px 30px;
    color: #fff;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 34px;
        font-weight: 500;
        margin: 24px;
    }
    p {
        font-size: 16px;
        margin-bottom: 24px;
    }
    .ghost_btn {
        text-align: center;
        font-size: 12px;
        text-transform: uppercase;
        border: 1px solid #fff;
        border-radius: 25px;
        /* padding: 0 28px; */
        width: 130px; height: 30px;
        line-height: 30px;
    }
    .ghost_btn:hover {
        background-color: #c83044;
        border-color: transparent;
        transition: 0.4s;
    }
`;

// Product.js
export const ProductStyle = styled.article`

    padding: 113px 130px 0;

    .sub_title {
        margin-bottom: 42px;
    }
    .our_product_grid {
        display: grid;
        grid-template-columns: 2fr 305px 305px;
        grid-auto-rows: 235px;
    }
    .our_product_grid .bg {
        background: no-repeat 0 0 / cover;
        margin: 12px;
        color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .our_product_grid .bg1 {
        background-image: url(${path}/images/5.jpg);
        /* grid-column: 1 / 3; */
        grid-row: 1 / 3;
    }
    .our_product_grid .bg2 {
        background-image: url(${path}/images/6.jpg);
    }
    .our_product_grid .bg3 {
        background-image: url(${path}/images/7.jpg);
    }
    .our_product_grid .bg4 {
        background-image: url(${path}/images/8.jpg);
    }
    .our_product_grid .bg5 {
        background-image: url(${path}/images/9.jpg);
    }
    .our_product_grid h3 {
        font-size: 32px;
        margin: 5px;
    }
    .our_product_grid .bg .filter .view_btn {
        font-size: 12px;
        border: 1px solid #fff;
        padding: 6px 24px;
        display: inline-block;
        text-transform: uppercase;
    }
    .our_product_grid .filter {
        display: grid;
        justify-items: center;
        place-content: center;
        width: 100%; height: 100%;
        transition: 0.4s;
        opacity: 0;
    }
    .our_product_grid .bg:hover .filter {
        opacity: 1;
        backdrop-filter: grayscale(70%) blur(5px);  
    }
`;

// Business.js
export const BusinessStyle = styled.article`

    padding: 113px 130px;

    .sub_title {
        margin-bottom: 42px;
    }
    .key_inner {
        display: flex;
        justify-content: center;
    }
    .key_inner figure {
        margin: 12px;
    }
    .key_inner figure figcaption {
        border: 1px solid #ddd;
        border-top: none;
        padding: 20px;
        cursor: pointer;
    }
    .key_inner figure figcaption h3 {
        display: block;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        margin-bottom: 10px;
    }
    .key_inner figure figcaption span {
        display: block;
        font-size: 13px;
        text-align: left;
        color: #777;
        padding-top: 10px;
        line-height: 1.3;
    }
    .key_inner figure .imgScale {
        overflow: hidden;
    }
    .key_inner figure .imgScale img {
        transition: 0.3s;
    }
    .key_inner figure:hover figcaption h3 {
        color: #458FDB;
    }
    .key_inner figure:hover .imgScale img {
        filter: grayscale(80%);
        transform: scale(1.07);
    }
`;

// Inside.js
export const InsideStyle = styled.article`

    padding: 120px 30px;
    background: url(${path}/images/inside.jpg) no-repeat 50% / cover;

    .title {
        color: #fff;
        font-weight: 500;
        font-size: 34px;
        margin-bottom: 18px;
    }
    p {
        text-align: center;
        color: #fff;
        margin-bottom: 36px;
        font-size: 17px;
    }
    ul {
        font-size: 18px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul li {
        margin: 0 12px;
    }
    ul li a {
        border: 1px solid #777;
        padding: 30px 70px;
        transition: 0.4s;
    }
    ul li a:hover {
        background-color: #73aeea;
    }
`;

// Footer.js
export const FooterStyle = styled.footer`

    /* height: 220px; */
    position: relative;
    background-color: #333;
    padding: 40px 120px 80px;

    .footer_logo {
        position: absolute;
        top: 40px;
    }
    ul {
        display: flex;
    }
    .footer_border li {
        margin-right: 33px;
        position: relative;
    } 
    .footer_border li::after {
        content: "";
        width: 1px; height: 13px;
        background-color: #717171;
        position: absolute;
        top: 6px; right: -16px;
    }
    .footer_border li:last-child::after {
        content: "";
        width: 1px; height: 13px;
        background-color: transparent;
        position: absolute;
        top: 6px; right: -16px;
    }
    .footer_info {
        margin-left: 120px;
        margin-bottom: 5px;
        color: #999;
        font-size: 14px;
    }
    .footer_click a {
        font-size: 15px;
        color: #fff;
        margin-bottom: 15px;
    }
    .footer_click a:hover {
        font-weight: 500;
    }
    .footer_sns {
        position: absolute;
        top: 40px; right: 120px;
    }
    .footer_sns ul a {
        width: 30px; height: 30px;
        background: no-repeat 50% / cover;
        text-indent: -9999px;
        margin-right: 12px;
    }
    .footer_sns ul .sns1 {
        background-image: url(${path}/images/facebook.png);
    }
    .footer_sns ul .sns2 {
        background-image: url(${path}/images/blog.png);
    }
    .footer_sns ul .sns3 {
        background-image: url(${path}/images/insta.png);
    }
    .footer_sns ul .sns4 {
        background-image: url(${path}/images/kakao.png);
    }
    .copyright {
        text-align: left;
    }

    /* goUp */
    .goUp {
    position: fixed;
    right: 10px; bottom: 20px;
    }
`;
