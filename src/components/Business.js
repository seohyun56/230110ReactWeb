import { BusinessStyle } from "./Style";
import { Link } from "react-router-dom";
import { useState } from "react";

const dataList2 = [
    {id: 1, url: "/images/10.jpg", alt: "img10" ,title: "사업분야01", subTitle: "고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다."},
    {id: 2, url: "/images/11.jpg", alt: "img11" ,title: "사업분야02", subTitle: "고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다."},
    {id: 3, url: "/images/12.jpg", alt: "img12" ,title: "사업분야03", subTitle: "고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다."},
    {id: 4, url: "/images/13.jpg", alt: "img13" ,title: "사업분야04", subTitle: "고객의 필요와 사업환경에 따라 맞춤형 디자인으로 보다 큰 감동을 드립니다."},
];

function Business() {
    const path = process.env.PUBLIC_URL;
    const [data, setData] = useState(dataList2);

    return (
        <BusinessStyle>
            <h2 className="title">key business</h2>
            <h3 className="sub_title">정직과 신뢰, 디자인으로 함께 하는 파이브스톤</h3>
            <section className="key_inner">
                {data.map(img => (
                    <figure key={img.id}>
                        <Link to="/">
                            <div className="imgScale"><img src={path + img.url} alt={img.alt} /></div>
                        </Link>
                        <figcaption>
                            <h3><Link to="/">{img.title}</Link></h3>
                            <span><Link to="/">{img.subTitle}</Link></span>
                        </figcaption>
                    </figure>
                ))}
            </section>
        </BusinessStyle>
    );
}

export default Business;