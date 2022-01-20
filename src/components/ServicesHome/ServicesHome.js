import React from "react";
import styles from './ServicesHome.module.css';
import ServiceHome from "../ServiceHome/ServiceHome";
import { Link } from 'react-router-dom';
import data from './data';

const ServicesHome = () => {
    return(
        <div className={`container ${styles.contain}`}>
            <Link to="/services" style={{textDecoration:'none'}}>
                <p className={styles.heading}>Services</p>
            </Link>
            <div>
                <p className={`mx-auto ${styles.subHeading}`}>Modernize your workflow and maximize result</p>
            </div>

            <div className="row">
                {
                    data && data.map(x=>(
                        <div key={x.id} className="col-md-4">
                            <ServiceHome heading={x.heading} content={x.content} to={x.to} icon={x.icon}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ServicesHome;