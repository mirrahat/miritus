import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return(
        <div style={{backgroundColor: '#fff1e5'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Top three the reason why you should choosing us.</p>
                <p data-aos='slide-left' className={styles.sub_text}>In quo quaerimus, non numquam eius modi tempora incidunt</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Experience</p>
                        <p className={styles.logo_text}>Probabo, inquit, modo ista sis aequitate, quam interrogare aut in voluptate ponit.</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="experience"/>
                        <p className={styles.logo_head}>Easy Communication</p>
                        <p className={styles.logo_text}>Probabo, inquit, modo ista sis aequitate, quam nihil impedit, quo.</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={comfort} alt="experience"/>
                        <p className={styles.logo_head}>Comfortable</p>
                        <p className={styles.logo_text}>Alii autem, quibus ego cum teneam sententiam, quid bonum esse fugiendum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs;