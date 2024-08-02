// import Image from "next/image";
// import { useState } from "react";

import useResponsive from "@/hooks/shared/useResponsive";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import styles from "@/components/single-product/swiper.module.css";

// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// function SingleProductImages({ product }) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const imageWidth = 500; // Set your desired width here
//   const imageHeight = 500; // Set your desired height here

//   return (
//     <div>
//       <Swiper
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className={styles.mySwiper}
//       >
//         {product.images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={`http://${image}`}
//               layout="fill"
//               alt={product.name}
//               objectFit="cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {product.images.length > 1 && (
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           spaceBetween={10}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="mySwiper2"
//         >
//           {product.images.map((image, index) => (
//             <SwiperSlide key={index} className={styles.swiperSlide}>
//               <Image
//                 src={`http://${image}`}
//                 layout="fill"
//                 alt={product.name}
//                 objectFit="cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </div>
//   );
// }

// export default SingleProductImages;

function SingleProductImages({ product }) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [mainImage, setMainImage] = useState(product.images[0]);

  useEffect(() => {
    if (product?.images && product?.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };
  return (
    <Stack justifyContent="center" rowGap={2}>
      <Box>
        <Image
          width={mdDown ? 380 : 450}
          height={mdDown ? 260 : 450}
          src={`http://${mainImage}`}
          alt={product.name}
          style={{ borderRadius: "10px" }}
        />
      </Box>
      {product?.images.length > 1 && (
        <Box sx={{ display: "flex", gap: 1 }}>
          {product?.images.slice(0, 3).map((image, index) => (
            <Image
              key={index}
              width={mdDown ? 95 : 110}
              height={mdDown ? 95 : 110}
              src={`http://${image}`}
              alt={product.name}
              style={{ borderRadius: "10px", cursor: "pointer" }}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </Box>
      )}
    </Stack>
  );
}

export default SingleProductImages;
