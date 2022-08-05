// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Xiaomi/Redmi10Prime/AugART/PEA/D53045477_WL_AugArt_Redmi_10_Prime_2022_PC_Hero_3000x1200._CB630838378_.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Augart/LD/Aug_shop-now_PC_Hero_1500x600._CB630944569_.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/AugART/Event/Unrec-Rev/2/PC_3000._CB630827606_.jpg" alt="" /></SwiperSlide>
                
            </Swiper>
        </>
    );
}
