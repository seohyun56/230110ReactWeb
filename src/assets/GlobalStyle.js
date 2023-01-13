import reset from "styled-reset"
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

    html {
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont,"Malgun Gothic","맑은 고딕",helvetica,"Apple SD Gothic Neo",sans-serif;
        scroll-behavior: smooth;
    }

    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    img {
        vertical-align: top;
        width: 100%;
    }

    .title {
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        text-transform: uppercase;
    }
    .sub_title {
        text-align: center;
        color: #888;
        font-size: 17px;
        padding-top: 10px;
    }

    .imgScale {
        overflow: hidden;
    }
    .imgScale img {
        transition: 0.4s;
    }
`;

export default GlobalStyle;