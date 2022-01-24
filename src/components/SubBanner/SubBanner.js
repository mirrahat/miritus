import React from "react";
import styles from './SubBanner.module.css';

const SubBanner = ({heading, subHeading, img}) => {

  return (
    <>
        <div className={styles.imgbox} style={{backgroundImage: `url(${img})`}}>
            <div className={styles.center}>
                <p className={styles.head}>{heading}</p>
                <p className={styles.subHead}>{subHeading}</p>
            </div>
        </div>
        
    </>
  );
};

export default SubBanner;
