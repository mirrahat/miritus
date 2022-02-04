import React from "react";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p data-aos='fade-down' className={styles.text}>We are the solutions provider for all home</p>
                <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>LET&apos;S TALK</button>
            </div>
            
        </div>
        
    </>
  );
};

export default Banner;
