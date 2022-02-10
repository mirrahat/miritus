import React from 'react';
import styles from './CaseStudy.module.css';
import img from '../../assets/caseStudy/1.png';
const CaseStudy = () =>{
    return(
        <div className={`container ${styles.contain}`}>
            <p className={styles.head}>WHAT WE DO</p>
            <div>
                <p className={styles.our}>OUR CASE&nbsp;</p>
                <p className={styles.study}>STUDIES</p>
            </div>
            <div className='my-5'>
                <p className={styles.filter}>ALL</p>
                <p className={styles.filter}>FINANCIAL</p>
                <p className={styles.filter}>HUMAN RESOURCES</p>
                <p className={styles.filter}>START UP</p>
                <p className={styles.filter}>STRATEGY</p>
            </div>

            <div className='row'>
                <div className='col-md-4 mt-4' >
                    <div className={styles.img} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${img})`}}>
                        <p className={styles.imgText1}>Marketing, SEO</p>
                        <p className={styles.imgText2}>Dicta Sunt Explicabo</p>
                    </div>
                </div>

                <div className='col-md-4 mt-4' >
                    <div className={styles.img} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${img})`}}>
                        <p className={styles.imgText1}>Marketing, SEO</p>
                        <p className={styles.imgText2}>Dicta Sunt Explicabo</p>
                    </div>
                </div>

                <div className='col-md-4 mt-4' >
                    <div className={styles.img} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${img})`}}>
                        <p className={styles.imgText1}>Marketing, SEO</p>
                        <p className={styles.imgText2}>Dicta Sunt Explicabo</p>
                    </div>
                </div>

                <div className='col-md-4 mt-4' >
                    <div className={styles.img} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(5, 25, 81, .55)), url(${img})`}}>
                        <p className={styles.imgText1}>Marketing, SEO</p>
                        <p className={styles.imgText2}>Dicta Sunt Explicabo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;