import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "./More.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"
import img7 from "../../images/img7.jpg"
import img8 from "../../images/img8.webp"
import Popular from '../Popular/Popular';
function More() {
    return (
        <div style={{ marginTop: "50px" }}>
            <div className='more'>
                <Swiper className='main_carts'
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={window.screen.width < 500 ? 2 : 4}

                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='main_card'><img className='main_img' src={img1} alt="" />
                        <div className='main_text'>
                            <h3>
                                What Is A Penalty Kick In Soccer</h3>
                            <p>Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adi...</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='main_card'><img className='main_img' src={img2} alt="" />
                        <div className='main_text'>
                            <h3>

                                Offsides In Soccer: Explained</h3>
                            <p>Watching a match? Get the scoop on the rules of the game, starting with the offside soccer rule, explained by adidas.

                            </p>
                        </div>

                    </SwiperSlide>     <SwiperSlide className='main_card'><img className='main_img' src={img3} alt="" />
                        <div className='main_text'>
                            <h3>
                                The Only Ultraboost Sizing Guide You’ll Ever Need </h3>
                            <p>Upgrade your runs with the adidas Ultraboost. Read our size guide to discover the differences between each Ultraboost version to find the pe...</p>
                        </div>

                    </SwiperSlide>     <SwiperSlide className='main_card'><img className='main_img' src={img4} alt="" />
                        <div className='main_text'>
                            <h3>

                                The Definitive adidas Forum Size Guide</h3>
                            <p>Curious about where to start with adidas Forum sizing? Look no further to learn about how the iconic sneakers fit before even trying them on...</p>
                        </div>

                    </SwiperSlide>     <SwiperSlide className='main_card'><img className='main_img' src={img5} alt="" />
                        <div className='main_text'>
                            <h3>
                                What Is A Penalty Kick In Soccer</h3>
                            <p>Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adi...</p>
                        </div>

                    </SwiperSlide>     <SwiperSlide className='main_card'><img className='main_img' src={img7} alt="" />
                        <div className='main_text'>
                            <h3>

                                manhattan Logos: History and Meaning</h3>
                            <p>Ever wondered how the adidas logos came to be? Discover the history of adidas logos and the purpose behind each design evolution, from 1949 ...</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='main_card'><img className='main_img' src={img8} alt="" />
                        <div className='main_text'>
                            <h3>
                                What Is A Penalty Kick In Soccer</h3>
                            <p>Are you curious about what a penalty kick is, when it happens and what the rules are? Read about what they are and when they happen with adi...</p>
                        </div>

                    </SwiperSlide>



                </Swiper>
            </div>
            <Popular />

        </div>
    )
}

export default More