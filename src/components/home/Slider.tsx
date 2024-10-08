import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/swiper.module.css";

import SlideOne from "@/assets/images/lavazza-coffee.webp";
import SlideTwo from "@/assets/images/tognana-mokapot.webp";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useResponsive from "@/hooks/shared/useResponsive";

function Slider() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <div className={styles.sliderContainer}>
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
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.imageWrapper}>
            <Image
              src={SlideOne}
              alt="slide-one"
              layout="fill"
              objectFit={mdDown ? "contain" : "cover"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.imageWrapper}>
            <Image
              src={SlideTwo}
              alt="slide-two"
              layout="fill"
              objectFit={mdDown ? "contain" : "cover"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
