import React from 'react';
import styles from './Bottom.module.css';
import fakeData from './fakeData';

const Bottom = () =>{
    return(
        <>
            <div className={`container ${styles.contain}`}>
                {
                    fakeData.map((x, idx)=>(
                        idx%2 === 0?
                        <div key={x.id} className={`row ${styles.row} flex-column-reverse flex-md-row`}>
                            <div className='col-md-6'>
                                <p className={styles.head}>{x.heading}</p>
                                <p className={styles.content}>{x.content}</p>
                            </div>
                            <div className='col-md-6'>
                                <img src={x.img} alt='' className={styles.img}/>
                            </div>
                        </div>
                        :
                        <div key={x.id} className={`row ${styles.row}`}>
                            <div className='col-md-6'>
                                <img src={x.img} alt='' className={styles.img1}/>
                            </div>
                            <div className='col-md-6'>
                                <p className={styles.head1}>{x.heading}</p>
                                <p className={styles.content1}>{x.content}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Bottom;