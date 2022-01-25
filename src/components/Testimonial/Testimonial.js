import React from "react";
import styles from './Testimonial.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image from '../../assets/home/testimonial1.png';

function Testimonial() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  
    return (
        <div className={styles.container}>
            <p className={styles.head}>Our Testimonial</p>
            <p className={styles.subHead}>Our trusted client review</p>

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                // centerMode={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={1000}
                containerClass={`carousel-container`}
                arrows={false}
                dotListClass="custom-dot-list-style"
                itemClass={`carousel-item-padding-40-px mx-2`}
                minimumTouchDrag={50}
                centerMode={true}
                >

                <div className={styles.box}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} alt="" className={styles.img}/>
                        </div>
                        <div className="col-md-9">
                            <p className={styles.name}>Howard Arlene</p>
                            <p className={styles.profession}>Finance Manager</p>
                        </div>                
                    </div>

                    <div className="row">
                        <p className={styles.msg}>Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.</p>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} alt="" className={styles.img}/>
                        </div>
                        <div className="col-md-9">
                            <p className={styles.name}>Miles Esther</p>
                            <p className={styles.profession}>Public Relations Specialist</p>
                        </div>                
                    </div>

                    <div className="row">
                        <p className={styles.msg}>Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} alt="" className={styles.img}/>
                        </div>
                        <div className="col-md-9">
                            <p className={styles.name}>Howard Arlene</p>
                            <p className={styles.profession}>Finance Manager</p>
                        </div>                
                    </div>

                    <div className="row">
                        <p className={styles.msg}>Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} alt="" className={styles.img}/>
                        </div>
                        <div className="col-md-9">
                            <p className={styles.name}>Howard Arlene</p>
                            <p className={styles.profession}>Finance Manager</p>
                        </div>                
                    </div>

                    <div className="row">
                        <p className={styles.msg}>Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} alt="" className={styles.img}/>
                        </div>
                        <div className="col-md-9">
                            <p className={styles.name}>Howard Arlene</p>
                            <p className={styles.profession}>Finance Manager</p>
                        </div>                
                    </div>

                    <div className="row">
                        <p className={styles.msg}>Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business.</p>
                    </div>
                </div>
                

            </Carousel>
        </div>

    );
  }
  
export default Testimonial;