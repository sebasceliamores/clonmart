import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import canasta from "../public/images/canasta.png";
import canasta2 from "../public/images/canasta2.png";
import canasta3 from "../public/images/canasta3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


export default function Carousel() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image src={canasta} height={"464px"} width={"1240px"} alt="kjdk" className="h-full w-full" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={canasta2} height={"464px"} width={"1240px"} alt="kjdk" className="h-full w-full" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={canasta3} height={"464px"} width={"1240px"} alt="kjdk" className="h-full w-full" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
