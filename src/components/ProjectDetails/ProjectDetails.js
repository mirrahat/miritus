import React from "react";
import styles from './ProjectDetails.module.css';
import banner from '../../assets/projectDetails/banner.png';
import cardImg from '../../assets/projectDetails/card1.png';

const ProjectDetails = () =>{
    return (
        <>
            <div className="container">
                <img src={banner} alt="" className={styles.banner}/>
                <div className="row mx-5">
                    <div className="col-md-6" style={{paddingLeft: '70px'}}>
                        <p className={styles.title}>Project Details</p>
                        <p className={styles.heading}>One of your best product become more stand out</p>
                        <p className={styles.subHead}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                    </div>
                    <div className="col-md-6">
                        {/* Card  */}
                        <div className={`card ${styles.card}`}>
                            <img className={`card-img-top`} src={cardImg} alt="Card cap"/>
                            <div style={{borderBottom: '1px solid #ebe9ed', margin: '0px 40px'}}>
                                <p className={styles.cardL}>Client</p>
                                <p className={styles.cardR}>Paula Ramsey</p>
                            </div>
                            <div style={{borderBottom: '1px solid #ebe9ed', margin: '0px 40px'}}>
                                <p className={styles.cardL}>Categories</p>
                                <p className={styles.cardR}>Interior</p>
                            </div>
                            <div style={{borderBottom: '1px solid #ebe9ed', margin: '0px 40px'}}>
                                <p className={styles.cardL}>Date</p>
                                <p className={styles.cardR}>23 September 2020</p>
                            </div>
                            <div style={{margin: '0px 40px'}}>
                                <p className={styles.cardL}>Tags</p>
                                <p className={styles.cardR}>branding, vintage, creative</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content  */}
                <div className={`row mt-5 ${styles.textBody}`}>
                    <div className="col-md-6">
                        <p className={styles.text}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</p>
                    </div>
                    <div className="col-md-6">
                        <p className={styles.text}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. </p>
                        <p className={styles.text}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectDetails;