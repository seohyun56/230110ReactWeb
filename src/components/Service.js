import { ServiceStyle } from "./Style";
import { Link } from "react-router-dom";
import { useState } from "react";

const dataList1 = [
    {id: 1, url: "/images/1.jpg", alt: "img1" ,title: "회사개요", content: "고객과 함께 꾸준히 성장한 당사의 개요, 비전 등의 내용을 소개합니다."},
    {id: 2, url: "/images/2.jpg", alt: "img2" ,title: "사업분야", content: "당사의 사업내역 및 앞으로 계획하고 진행할 사업계획을 정리하였습니다."},
    {id: 3, url: "/images/3.jpg", alt: "img3" ,title: "제품안내", content: "고객감동을 실현하는 당사의 추천상품을 자세히 보실 수 있는 공간입니다."},
    {id: 4, url: "/images/4.jpg", alt: "img4" ,title: "홍보자료", content: "각종 미디어에 소개된 당사의 언론 및 영상 자료를 보실 수 있는 공간입니다."},
];

function Service() {
    const path = process.env.PUBLIC_URL;
    const [data, setData] = useState(dataList1);

    return (
        <ServiceStyle>
            <h2 className="title">main service</h2>
            <h3 className="sub_title">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</h3>
            <ul>
                {data.map(img => (
                    <li key={img.id}>
                        <Link to="/">
                            <div className="imgScale"><img src={path + img.url} alt={img.alt} /></div>
                        </Link>
                        <h3><Link to="/">{img.title}</Link></h3>
                        <p><Link to="/">{img.content}</Link></p>
                    </li>
                ))}
            </ul>
        </ServiceStyle>
    );
}

export default Service;