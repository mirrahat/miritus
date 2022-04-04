import React from "react";
import "./style.css";
import styles from "./Testimonial.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { fakeData } from "./fakeData";

function Testimonial() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1. -35
        },
        tablet: {
            breakpoint: { max: 1024, min: 560 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 560, min: 0 },
            items: 0.6,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <div className={`${styles.container} overflow-hidden`}>
            <p data-aos="slide-right" className={styles.head}>
                Our Testimonial
            </p>
            <p data-aos="slide-left" className={styles.subHead}>
                Our trusted client review
            </p>

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={false}
                customTransition="transform 400ms ease-in-out"
                transitionDuration={500}
                containerClass={`carousel-container`}
                arrows={false}
                dotListClass={`custom-dot-list-style`}
                itemClass={`carousel-item-padding-40-px d-flex align-items-stretch mt-3 px-2`}
                // focusOnSelect={true}
                // partialVisbile={true}
                centerMode={true}
            >
                {fakeData.map((x) => (
                    <div className={styles.box} key={x.id}>
                        <div className="row">
                            <div className="col-md-3 col-sm-3">
                                <img
                                    src={x.img}
                                    alt=""
                                    className={styles.img}
                                />
                            </div>
                            <div className="col-md-9 col-sm-9">
                                <p className={styles.name}>{x.name}</p>
                                <p className={styles.profession}>
                                    {x.profession}
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <p className={styles.msg}>{x.message}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Testimonial;
