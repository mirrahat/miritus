import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row">
                    <div className="col-md-6">
                        <p className={styles.head}>ABOUT US</p>
                        <p className={styles.heading}>We have a great team in terms of technology</p>
                        <p className={styles.content}>A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery</p>
                        <div style={{textAlign: 'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}> MEET OUR TEAM</button>
                        </div>
                        
                    </div>

                    {/* <div className="col-md-6 mt-5">
                            <div className="">
                                <img src={img2} alt="" style={{height:'200px', marginLeft:'270px', marginBottom:'23px'}}/>
                            </div>
                            <div className="">
                                <img src={img1} alt="" style={{height:'200px', marginTop:'-250px',marginRight:'23px'}}/>
                                <img src={img3} alt="" style={{height:'200px'}}/>
                            </div>
                    </div> */}

                    <div className="col-md-6 mt-5">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img src={img1} alt=""/>
                            </div>
                            <div className={styles.column}>
                                <img src={img2} style={{width:'110%'}} alt=""/>
                                <img src={img3} alt=""/>
                            </div>
    
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUsHome;