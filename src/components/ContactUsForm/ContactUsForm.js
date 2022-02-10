import React, { useState } from "react";
import styles from './ContactUsForm.module.css';
// import {Map, GoogleApiWrapper} from 'google-maps-react';

const ContactUsForm = () =>{
    const [formContent, setFormContent ] = useState({});

    const handleChange = ( event ) =>{
        const { value, name } = event.target;

        setFormContent(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return(
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                <p data-aos='fade-up' className={`${styles.heading} mx-auto`}>We&apos;d Love to Hear From You</p>

                <div className="row">
                    <div className="col-md-4" data-aos='fade-right'>
                        <p className={styles.head}>Address</p>
                        <p className={styles.content}>1201 New Zealand Metropolis 3452</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-up' data-aos-offset='100'>
                        <p className={styles.head}>Contact</p>
                        <p className={styles.content}>Mobile 	: +00 123 456 78</p> 
                        <p className={styles.content}>Phone 	: +00 123 678 90</p>
                        <p className={styles.content}>Email: contact@gmail.com</p>
                    </div>

                    <div className="col-md-4" data-aos='fade-left' data-aos-offset='70'>
                        <p className={styles.head}>Address</p>
                        <p className={styles.content}>Monday - Friday: 09:00 - 20:00</p>
                        <p className={styles.content}>Sunday &amp; Saturday: 10:30 - 22:00</p>
                    </div>
                </div>

                <p className={styles.email} data-aos='fade-up'>You can email us</p>

                <div className="row">
                    <div className="col-md-6" data-aos='fade-right' style={{textAlign: 'left'}}>
                        <label className={styles.label}>Name</label><br/>
                        <input name="name" value={formContent.name} onChange={handleChange} className={styles.input} type="text" />

                        <label className={styles.label}>Email</label><br/>
                        <input name="email" value={formContent.email} onChange={handleChange} className={styles.input} type="email" />

                        <label className={styles.label}>Subject</label><br/>
                        <input name="subject" value={formContent.subject} onChange={handleChange} className={styles.input} type="text" />
                    </div>

                    <div className="col-md-6" data-aos='fade-left' style={{textAlign: 'left'}}>
                        <label className={styles.label}>Message</label><br/>
                        <textarea name="message" value={formContent.message} onChange={handleChange} className={`${styles.input} ${styles.msg}`} type="text"/>
                        <div style={{textAlign:'right'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <Map
                    google={this.props.google}
                    style={{width:'100%', height:'50%'}}
                    zoom={14}
                    initialCenter={
                        {
                            lat: 23.760374,
                            lng: 90.411643
                        }
                    }
                />
            </div> */}
        </>
    )
}

export default ContactUsForm;