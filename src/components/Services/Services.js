import React from "react";
import styles from './Services.module.css';
import ServiceHome from "../ServiceHome/ServiceHome";
import data from './data';

const Services = () => {
    return(
        <div className={`container ${styles.contain} overflow-hidden pb-2`}>
                <p data-aos='slide-right' className={styles.heading}>Services</p>
            <div>
                <p data-aos='slide-left' className={`mx-auto ${styles.subHeading}`}>Modernize your workflow and maximize result</p>
            </div>

            <div className={`row ${styles.cont}`}>
                {
                    data && data.map(x=>(
                        <div key={x.id} className="col-lg-4 col-md-6">
                            <ServiceHome id={x.id} heading={x.heading} content={x.content} to={x.to} icon={x.icon}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Services;