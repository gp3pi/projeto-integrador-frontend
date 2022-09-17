import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrossel.css";

import { Pagination, Navigation } from "swiper";

function Carrossel() {

    var items = [
        { img: "https://cdn.discordapp.com/attachments/1020449442861699127/1020502360474267669/unh.png" },
        { img: "https://cdn.discordapp.com/attachments/1020449442861699127/1020503528550170774/tamoJunta.png" },
        { img: "https://cdn.discordapp.com/attachments/1020449442861699127/1020503072667086928/africa.png" },
        { img: "https://cdn.discordapp.com/attachments/1020449442861699127/1020468726916722749/Group_1.png" }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    items.map((item) => (
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default Carrossel