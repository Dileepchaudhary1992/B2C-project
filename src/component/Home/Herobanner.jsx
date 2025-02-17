import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SimpleSlider = () => {
    const banners = [
        { id: 1, image: "https://assets.tatacliq.com/medias/sys_master/images/63709958012958.jpg" },
        { id: 2, image: "https://assets.tatacliq.com/medias/sys_master/images/63709958012958.jpg" },
        { id: 3, image: "https://assets.tatacliq.com/medias/sys_master/images/63709958012958.jpg" },
      ];
    
  return (
    <div className="Herobanner">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
     className="w-full max-w-lg"
    >
        {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img
            src={banner.image}
            alt={`Banner ${banner.id}`}
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default SimpleSlider;
