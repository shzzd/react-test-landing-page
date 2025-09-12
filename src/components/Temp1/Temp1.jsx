import React from 'react'
import image from '../../assets/0fc2d17a692126ee5581f99187709b7123b4ee73.jpg'
import classes from './Temp1.module.css'

export default function Temp1() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <p>courses</p>
                <p>campuses</p>
                <p>partner institutions</p>
                <p>student testimonials</p>
                <p>stories</p>
            </div>
            <div className={classes.bottom}>
                <div>
                    <img src={image} alt="image" />
                </div>
                <div>
                    <h1>What will you study</h1>
                    <p>
                        If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching,
                        cutting-edge facilities, and exceptional industry connections, which will help to prepare you
                        for a rewarding career in the creative and tech industries.
                    </p>
                    <div className={classes.buttons}>
                        <button>View Courses</button>
                        <button>Download Prospectus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
