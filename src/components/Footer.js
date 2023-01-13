import { FooterStyle } from "./Style";
import { Link } from "react-router-dom";

function Footer() {
    const path = process.env.PUBLIC_URL;

    return (
        <FooterStyle>
            <div className="footer_logo">
                <img src={path + "/images/logoFooter.png"} alt="푸터로고" />
            </div>
            <div className="footer_click">
                <ul className="footer_info footer_border">
                    <li><Link to="/">개인정보취급방침</Link></li>
                    <li><Link to="/">이메일무단수집거부</Link></li>
                    <li><Link to="/">묻고답하기</Link></li>
                </ul>
            </div>
            <div className="footer_address">
                <ul className="footer_info footer_border">
                    <li>회사 : 파이브스톤</li>
                    <li>주소 : 경기도 고양시 덕양구 삼송로 193번길 28-3 하준빌딩 401호</li>
                    <li>사업자등록번호 : 780-42-00047</li>
                </ul>
            </div>
            <div className="footer_contact footer_border">
                <ul className="footer_info">
                    <li>TEL : 010-2709-0828</li>
                    <li>EMAIL : fivestone55@daum.net</li>
                </ul>
            </div>
            <div className="footer_sns">
                <ul>
                    <li><Link to="/" className="sns1">facebook</Link></li>
                    <li><Link to="/" className="sns2">blog</Link></li>
                    <li><Link to="/" className="sns3">insta</Link></li>
                    <li><Link to="/" className="sns4">kakao</Link></li>
                </ul>
            </div>
            <div className="copyright footer_info">
                COPYRIGHT © 2021 FIVESTONE. ALL RIGHT RESERVED
            </div>

            {/* goUp */}
            <a href="#" className="goUp">
                <img src={path + "/images/icon-top.png"} alt="위로" />
            </a>
        </FooterStyle>
    );
}

export default Footer;