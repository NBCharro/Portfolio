import React from 'react';
import classes from './Fondo.module.css';

const Fondo = (props) => {
    return (
        <>
            <div className={classes.backgroundContainer}>
                <div className={classes.stars} />
                <div className={classes.twinkling} />
            </div>
            {props.children}
        </>
    );
};

export default Fondo;
