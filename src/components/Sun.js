import React from 'react';
import classes from './Sun.module.css';

const Sun = (props) => {
    return (
        <>
            <div className={classes.ui}>
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
                    className={classes.cover}
                    style={{
                        backgroundImage: `url(${props.imagen})`,
                    }}
                ></div>
            </div>
        </>
    );
};

export default Sun;
