import React from "react";
import styles from './ServiceHome.module.css';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ServiceHome = (props) =>{
    return(
        <div className={styles.box}>
            <img src={props.icon} alt="" className={styles.img}/>
            <p className={styles.heading}>{props.heading}</p>
            <p className={styles.text}>{props.content}</p>
            <HiOutlineArrowNarrowRight className={styles.to} size="2rem" color="#ff4c0a"/>
        </div>
    )
}
export default ServiceHome;