import React from "react";
import styles from './SubBanner.module.css';

const SubBanner = ({heading, subHeading, img}) => {

  return (
    <>
        <div className={`${styles.imgbox} overflow-hidden`} style={{backgroundImage: `url(${img})`}}>
            <div className={styles.center}>
                <p data-aos='slide-right' className={styles.head}>{heading}</p>
                <p data-aos='slide-left' className={styles.subHead}>{subHeading}</p>
            </div>
        </div>
        
    </>
  );
};

export default SubBanner;
