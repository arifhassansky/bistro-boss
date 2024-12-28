import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-28">
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
          <h2 className="text-4xl text-center -mt-16 text-white uppercase">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
          <h2 className="text-4xl text-center -mt-16 text-white uppercase">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
          <h2 className="text-4xl text-center -mt-16 text-white uppercase">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} />
          <h2 className="text-4xl text-center -mt-16 text-white uppercase">
            deserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} />
          <h2 className="text-4xl text-center -mt-16 text-white uppercase">
            Soups
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
