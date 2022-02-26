import React from "react";
import styles from './ProjectDetails.module.css';
import OtherProjects from './OtherProjects';
import data from './fakeData';
import { useLocation } from "react-router-dom";

const ProjectDetails = () =>{
    const { search } = useLocation(); 
    const id = parseInt(new URLSearchParams(search).get('id'));
    let project = data.filter(x=>{
        return x.id === id;
    })[0];

    return (
        <>
            <div className="container">
                <img src={project.banner} alt="" className={styles.banner}/>
                <div className={`row flex-column-reverse flex-md-row ${styles.cBody}`}>
                    <div className="col-md-6">
                        <p className={styles.title}>{project.title}</p>
                        <p className={styles.heading}>{project.heading}</p>
                        <p className={styles.subHead}>{project.subHeading}</p>
                    </div>
                    <div className="col-md-6">
                        {/* Card  */}
                        <div className={`card ${styles.card}`}>
                            <img className={`card-img-top`} src={project.card.img} alt="Card cap"/>
                            <div style={{borderBottom: '1px solid #ebe9ed'}} className={styles.cardMargin}>
                                <p className={styles.cardL}>Client</p>
                                <p className={styles.cardR}>{project.card.client}</p>
                            </div>
                            <div style={{borderBottom: '1px solid #ebe9ed'}} className={styles.cardMargin}>
                                <p className={styles.cardL}>{project.card.categories}</p>
                                <p className={styles.cardR}>Interior</p>
                            </div>
                            <div style={{borderBottom: '1px solid #ebe9ed'}} className={styles.cardMargin}>
                                <p className={styles.cardL}>Date</p>
                                <p className={styles.cardR}>{project.card.date}</p>
                            </div>
                            <div className={styles.cardMargin}>
                                <p className={styles.cardL}>Tags</p>
                                <p className={styles.cardR}>{project.card.tags}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content  */}
                <div className={`row ${styles.textBody}`}>
                    <div className="col-md-6">
                        <p className={styles.text}>{project.para1}</p>
                    </div>
                    <div className="col-md-6">
                        <p className={styles.text}>{project.para2}</p>
                        <p className={styles.text}>{project.para3}</p>
                    </div>
                </div>

                {/* Project Images  */}
                <div className={`row mt-5 ${styles.textBody}`}>
                    <div className="col-md-6">
                        <img src={project.img1} alt="project img" className={styles.pImg}/>
                    </div>
                    <div className="col-md-6">
                        <img src={project.img2} alt="" className={styles.pImg}/>    
                    </div>
                </div>

                {/* Summary  */}
                <div className={`row ${styles.sBody}`}>
                    <p className={styles.summary}>{project.summary}</p>
                </div>

            </div>

            {/* Other Projects  */}
            <div className="container" style={{ paddingRight: '0px'}}>
                <div className={`row mt-3 ${styles.tBody}`}>
                    <p className={styles.pTitle}>Other project</p>
                    <div>
                        <OtherProjects />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectDetails;
