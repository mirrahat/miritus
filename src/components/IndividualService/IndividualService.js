import React from "react";
import styles from './IndividualService.module.css';

import timer from '../../assets/individualService/timer.png';
import lock from '../../assets/individualService/tren.png';
import det from '../../assets/individualService/det.png';
import img1 from '../../assets/individualService/Image.png';
import img2 from '../../assets/individualService/Image_2.png';

const IndividualService = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <p className={styles.heading}>SEO Marketing </p>
                <p className={styles.heading_content}>Optics viral engagement, nor that jerk from finance really threw me under the bus or turn</p>
            
                <div className="row">
                    <div className="col-md-4">
                        <img src={timer} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Speed Optimization</p>
                        <p className={styles.heading_content}>Drink the Kool-aid shoot me an email nor thinking outside the box</p>
                    </div>

                    <div className="col-md-4">
                        <img src={det} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Marketing Strategy</p>
                        <p className={styles.heading_content}>Touch base nail jelly to the hothouse what about scaling components</p>
                    </div>

                    <div className="col-md-4">
                        <img src={lock} alt="" className={styles.img}/>
                        <p className={styles.logo_head}>Experts Worker</p>
                        <p className={styles.heading_content}>Parallel path it's a simple lift and shift the team pull in ten extra bodies </p>
                    </div>
                </div>


                <div className="row" style={{marginTop: '112px'}}>
                    <div className="col-md-6">
                        <img src={img1} alt="" className={styles.contentImg}/>
                    </div>
                    <div className="col-md-6">
                        <p className={`${styles.heading} ${styles.subHead}`}>Get The Maximum Benefits</p>
                        <p className={`${styles.heading_content} ${styles.justify}`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                    </div>
                </div>

                <div className="row" style={{marginTop: '112px'}}>
                    <div className="col-md-6">
                        <p className={`${styles.heading} ${styles.subHead}`}>Get The Maximum Benefits</p>
                        <p className={`${styles.heading_content} ${styles.justify}`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                    </div>
                    <div className="col-md-6">
                        <img src={img2} alt="" className={styles.contentImg}/>
                    </div>
                </div>
            
            </div>
        </>
    )
}
export default IndividualService;