import React from "react";
import styles from './ProjectDetails.module.css';
import banner from '../../assets/projectDetails/banner.png';
import cardImg from '../../assets/projectDetails/card.png';
import project1 from '../../assets/projectDetails/project1.png';
import project2 from '../../assets/projectDetails/project2.png';

const ProjectDetails = () =>{
    return (
        <>
            <div className="container">
                <img src={banner} alt="" className={styles.banner}/>
                <div className={`row flex-column-reverse flex-md-row ${styles.cBody}`}>
                    <div className="col-md-6">
                        <p className={styles.title}>Project Details</p>
                        <p className={styles.heading}>One of your best product become more stand out</p>
                        <p className={styles.subHead}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                    </div>
                    <div className="col-md-6">
                        {/* Card  */}
                        <div className={`card ${styles.card}`}>
                            <img className={`card-img-top`} src={cardImg} alt="Card cap"/>
                            <div style={{borderBottom: '1px solid #ebe9ed'}} className={styles.cardMargin}>
                                <p className={styles.cardL}>Client</p>
                                <p className={styles.cardR}>Paula Ramsey</p>
                            </div>
                            <div style={{borderBottom: '1px solid #ebe9ed'}} className={styles.cardMargin}>
                                <p className={styles.cardL}>Categories</p>
                                <p className={styles.cardR}>Interior</p>
                            </div>
                            <div style={{borderBottom: '1px solid #ebe9ed'}} className={styles.cardMargin}>
                                <p className={styles.cardL}>Date</p>
                                <p className={styles.cardR}>23 September 2020</p>
                            </div>
                            <div className={styles.cardMargin}>
                                <p className={styles.cardL}>Tags</p>
                                <p className={styles.cardR}>branding, vintage, creative</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content  */}
                <div className={`row ${styles.textBody}`}>
                    <div className="col-md-6">
                        <p className={styles.text}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</p>
                    </div>
                    <div className="col-md-6">
                        <p className={styles.text}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. </p>
                        <p className={styles.text}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. </p>
                    </div>
                </div>

                {/* Project Images  */}
                <div className={`row mt-5 ${styles.textBody}`}>
                    <div className="col-md-6">
                        <img src={project1} alt="project img" className={styles.pImg}/>
                    </div>
                    <div className="col-md-6">
                        <img src={project2} alt="" className={styles.pImg}/>    
                    </div>
                </div>

                {/* Summary  */}
                <div className={`row ${styles.sBody}`}>
                    <p className={styles.summary}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt. </p>
                </div>

            </div>

            {/* Other Projects  */}
            {/* <div className={`mt-3 ${styles.tBody}`}>
                <p className={styles.pTitle}>Other project</p>
            </div> */}
        </>
    )
}
export default ProjectDetails;