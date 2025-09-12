import React from 'react'
import classes from './Temp2.module.css'

export default function Temp2(props) {
    console.log(props.data)
    return (
        <div className={classes.wrapper}>
            <h1>
                Student <br /> Testimonials
            </h1>
            <div className={classes.boxes}>
                {props.data &&
                    props.data.map(
                        (item) =>
                            item.id < 5 && (
                                <div key={item.id} className={classes.box}>
                                    <div className={classes.content}>
                                        <p>''{item.name.firstname}</p>
                                        <p>{item.name.lastname}''</p>
                                        <p>{item.username}</p>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                            )
                    )}
            </div>
        </div>
    )
}
