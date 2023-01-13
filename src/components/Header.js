import React, { useState } from 'react';
import { HeaderStyle } from './Style';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const slideList = [
    {id: 1, url: "/images/header1.jpg", alt: "헤더1", title: "CREATIVE DESIGN", content1: "정직과 신뢰, 디자인을 최우선으로 생각하며", content2: "고객과 함께 할 수 있는 든든한 파트너가 되겠습니다."},
    {id: 2, url: "/images/header2.jpg", alt: "헤더2", title: "VERSATILE DESIGN", content1: "정직과 신뢰, 디자인을 최우선으로 생각하며", content2: "고객과 함께 할 수 있는 든든한 파트너가 되겠습니다."},
    {id: 2, url: "/images/header3.jpg", alt: "헤더3", title: "RESPONSIVE DESIGN", content1: "정직과 신뢰, 디자인을 최우선으로 생각하며", content2: "고객과 함께 할 수 있는 든든한 파트너가 되겠습니다."},
];

function Header() {
    const path = process.env.PUBLIC_URL;
    const [data, setData] = useState(slideList);

    return (
        <HeaderStyle>
            <Swiper
                slidesPerView={1}
                pagination={true}
                autoplay={{
                    delay: 3000,
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper" 
            >
                {data.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <h2>{slide.title}</h2>
                        <p>{slide.content1}<br />{slide.content2}</p>
                        <img src={path + slide.url} alt={slide.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </HeaderStyle>
    );
}

export default Header;