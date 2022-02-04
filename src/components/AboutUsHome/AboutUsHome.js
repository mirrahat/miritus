import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
                        <p data-aos="slide-left" className={styles.heading}>We have a great team in terms of technology</p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery</p>
                        </div>
                        <div data-aos='zoom-in' style={{textAlign: 'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}> MEET OUR TEAM</button>
                        </div>
                        
                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt=""/>
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{width:'110%'}} alt=""/>
                                <img data-aos="zoom-in-left" src={img3} alt=""/>
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;