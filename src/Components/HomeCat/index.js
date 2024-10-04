import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import React from 'react';
import { motion } from 'framer-motion';

const HomeCat = () => {
    return (
        <section className="homecat">
            <div className="container">
                <h3 className="mb-3 hd">Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={6}
                    pagination={false}
                    navigation={false}
                    modules={Navigation}
                    className="mySwiper"
                >
                    {[
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/item1-removebg-preview.png?alt=media&token=d0d8a9ad-bb29-48fb-a128-5076f00f95d0", title: "Baseball cap ", className: "item1" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/basketball.png?alt=media&token=9e9db0e0-6219-455b-8991-111ad0b258f5", title: "Molten BasketBall", className: "item2" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/tabletenis.png?alt=media&token=4d4e9eb5-10fe-4379-9736-7c924606d94e", title: "Table Tennis", className: "item3" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/item13-removebg-preview(1).png?alt=media&token=f148926d-8f63-4593-8e66-a7edbb69dec3", title: "Protein bottle", className: "item4" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/criketpad.png?alt=media&token=ff2e24cd-db6b-4415-a931-a33380c07d88", title: "Batting Pads", className: "item1" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/cricketgloves.png?alt=media&token=e71c1190-d352-4591-825c-d3383e23392d", title: "Batting Gloves", className: "item2" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/bag.png?alt=media&token=057b71e1-0c21-4b25-bdaa-f0095bce0f16", title: "Cricket Kit Bag", className: "item3" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/shoe1.png?alt=media&token=a6b3479f-94c7-42c0-b4f7-33933ba2e2ef", title: "FootBall Shoes", className: "item4" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/bottle.png?alt=media&token=90ae4569-7880-4631-948a-ab89b07af1e5", title: "Training Bottle", className: "item1" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/ball.png?alt=media&token=ed271980-749c-4064-a359-1292d26730db", title: "Adidas FootBall", className: "item2" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/tshirt.png?alt=media&token=66767874-cf5a-46c6-ae45-fcf62e152d2c", title: "Adidas Men OTR", className: "item3" },
                        { src: "https://firebasestorage.googleapis.com/v0/b/assignmentproject-1eae9.appspot.com/o/gloves.png?alt=media&token=17673fe2-a5e0-48b7-8854-b385ab716c9f", title: "Training Gloves", className: "item4" }
                    ].map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className={`${item.className} text-center`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                whileHover={{ scale: 1.1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                            >
                                <img src={item.src} alt={item.title} className="transition-img" />
                                <h6>{item.title}</h6>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCat;
