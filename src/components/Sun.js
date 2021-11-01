import { useState } from 'react';
import classes from './Sun.module.css';

const Sun = (props) => {
    const [hoverSol, setHoverSol] = useState(false);
    // const hoverHandler = (e) => {
    //     e.preventDefault();
    //     setHoverSol((prev) => !prev);
    // };
    const clicked = (e) => {
        e.preventDefault();
        props.clickado(props.nombre);
        setHoverSol((prev) => !prev);
    };
    return (
        <>
            <div className={classes.ui} onClick={clicked}>
                <div className={classes.sun}>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunFire}>
                        <div className={classes.sunFireInner}></div>
                    </div>
                    <div className={classes.sunBorder}></div>
                </div>
                <div
                    className={classes.paraHover}
                    // onMouseEnter={hoverHandler}
                    // onMouseLeave={hoverHandler}
                />
                <div
                    className={classes.cover}
                    // onMouseEnter={hoverHandler}
                    // onMouseLeave={hoverHandler}
                    style={{
                        backgroundImage: `url(${!hoverSol && props.imagen})`,
                    }}
                    // Cambiar el hoverSol a !hoverSol
                >
                    <div className={classes.Hijo}>
                        {hoverSol && props.children}
                        {/* Cambiar el !hoverSol a hoverSol */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sun;
