import React from "react";
import styles from './OtherProjects.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './styles.css';
import { fakeData } from "./fakeData";

const OtherProjects=()=>{

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.5,
            slidesToSlide: 2,

        },
        tablet: {
            breakpoint: { max: 1024, min: 560 },
            items: 2,
            slidesToSlide: 2, 

        },
        mobile: {
            breakpoint: { max: 560, min: 0 },
            items: 1.5,
            slidesToSlide: 1,

        }
      };

    return (
        <div className={`${styles.container} overflow-hidden mb-5`}>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={false}
                customTransition="transform 400ms ease-in-out"
                transitionDuration={500}
                containerClass={`carousel-container pr-5`}
                arrows={false}
                dotListClass={`custom-dot-list-style`}
                itemClass={`carousel-item-padding-40-px mx-2 d-flex align-items-stretch mt-3`}
                partialVisbile={true}
                additionalTransfrom={0}
                >
                {
                    fakeData.map((x) =>(
                        <div className={styles.box} key={x.id}>
                            <div className="row">
                                <div className={`col-md-5`}>
                                    <img src={x.img} alt="" className={styles.img}/>
                                </div>
                                <div className="col-md-7">
                                    <p className={styles.title}>{x.title}</p>
                                    <p className={styles.content}>{x.content}</p>
                                </div>               
                            </div>
                        </div>
                    ))
                }
                

            </Carousel>
        </div>
    )
}
export default OtherProjects;