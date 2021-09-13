import React from 'react';
import classes from './Fondo.module.css';

const Fondo = (props) => {
    return (
        <>
            <div className={classes.backgroundContainer}>
                <div className={classes.stars} />
                <div className={classes.twinkling} />
            </div>
            <div onClick={props.cambiarIdioma} className={classes.idioma}>
                <span
                    className={
                        props.idioma === 'es'
                            ? classes.active
                            : classes.noactive
                    }
                >
                    es
                </span>{' '}
                /{' '}
                <span
                    className={
                        props.idioma !== 'es'
                            ? classes.active
                            : classes.noactive
                    }
                >
                    en
                </span>
            </div>
            {props.children}
        </>
    );
};

export default Fondo;
