import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/improves.png';

const Real = () =>{
    return(
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' src={improveImg} alt="" className={styles.img}/>
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' className={styles.heading}>Real</p>
                        <p data-aos='slide-left' className={styles.subHeading}>Improves Customer Experiences</p>
                        <p data-aos='zoom-in' className={styles.content}>Responsive web design supply chain crowdfunding agile development analytics technology ownership startup. Network effects social proof user experience prototype buzz product management deployment metrics sales infographic equity holy grail crowdfunding release. </p>
                        <div data-aos='zoom-in' style={{textAlign:'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>LET&apos;S TALK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Real;