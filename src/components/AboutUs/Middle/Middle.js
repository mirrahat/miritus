import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';
import logo2 from '../../../assets/aboutUs/middle2.png';
import logo3 from '../../../assets/aboutUs/middle3.png';

const Middle = () =>{
    return(
        <div style={{backgroundColor: '#f8f8f8'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>Lorem ipsum dolor sit amet</p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>

                <div className="row">
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo1} alt=""/>
                            <p className={styles.head}>Web Design</p>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo2} alt=""/>
                            <p className={styles.head}>Web Design</p>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo3} alt=""/>
                            <p className={styles.head}>Web Design</p>
                            <p className={styles.content}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Middle;