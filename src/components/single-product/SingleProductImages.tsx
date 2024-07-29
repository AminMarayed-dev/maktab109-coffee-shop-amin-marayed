// import Image from "next/image";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

import useResponsive from "@/hooks/shared/useResponsive";
import { Stack } from "@mui/material";
import Image from "next/image";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// function SingleProductImages({ product }) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div>
//       <Swiper
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//       >
//         {product.images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div>
//               <Image
//                 src={`http://${image}`}
//                 layout="fill"
//                 alt={product.name}
//                 objectFit="cover"
//               />
//             </div>
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
//         >
//           {product.images.map((image, index) => (
//             <SwiperSlide key={index} className={styles.swiperSlide}>
//               <div>
//                 <Image
//                   src={`http://${image}`}
//                   layout="fill"
//                   alt={product.name}
//                   objectFit="cover"
//                 />
//               </div>
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
  return (
    <Stack justifyContent="center">
      <Image
        width={mdDown ? 340 : 500}
        height={mdDown ? 260 : 460}
        src={`http://${product.images[0]}`}
        alt={product.name}
        style={{ borderRadius: "10px" }}
      />
    </Stack>
  );
}

export default SingleProductImages;
