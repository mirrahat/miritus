import React from "react";
import styles from './SMediaServices.module.css';
import img1 from '../../assets/sMediaService/main.png';
import img2 from '../../assets/sMediaService/middle1.png';
import img3 from '../../assets/sMediaService/bottom1.png';

const SMediaServices = () =>{
    return (
        <>
            <div>
                {/* Top  */}
                <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
                    <div className="col-md-6 px-0">
                        <div className={styles.topContain}>
                            <p className={`${styles.headTop}`}>Social <span style={{color:'#ff4c0a'}}>Media</span></p>
                            <p className={styles.headTop}>Marketing</p>
                            <p className={styles.identityTop}>Identity on Social Media</p>
                            <p className={styles.content}>More than ever users are seeking information and basing decisions on their peers’ advice and opinions. Customers head to your Facebook and Twitter sometimes based on a post or a re-tweet. Let your brand identity on social media be consistent with the brand you have worked so hard to develop.</p>
                        </div>
                    </div>
                    <div className="col-md-6 px-0">
                        <img src={img1} alt="" className={styles.img1}/>
                    </div>
                </div>

                {/* Middle  */}
                <div className="container">
                    <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                        <div className={`col-md-6 ${styles.middleContain}`}>
                            <p className={styles.heading}>Next Level</p>
                            <p className={styles.text}>Bringing your business into the social media scene will bring you to the next level of advertising as well as a whole new way to connect with your market. This is the next step.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={img2} alt="" className={styles.img2}/>
                        </div>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="container">
                    <div className={`row ${styles.contain}`}>
                        <div className="col-md-6">
                            <img src={img3} alt="" className={styles.img2}/>
                        </div>
                        <div className={`col-md-6 ${styles.bottomContain}`}>
                            <p className={styles.heading1}>Custom Approach</p>
                            <p className={styles.text1}>Our team will help you establish a presence on both Facebook and Twitter with custom designed graphical elements that will make a lasting impression on all who visit your page. Combine this visibility with the ability to link directly to your website and you have a recipe for major exposure and traffic.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}
export default SMediaServices;