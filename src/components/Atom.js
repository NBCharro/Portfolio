import classes from './Atom.module.css';

const Atom = (props) => {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.sun}></div>
                <div className={`${classes.orbit} ${classes.earthOrbit}`}>
                    <div className={`${classes.globe} ${classes.earth}`}></div>
                </div>
                <div className={`${classes.orbit} ${classes.earthOrbit2}`}>
                    <div className={`${classes.globe} ${classes.earth2}`}></div>
                </div>
            </div>
            <div className={classes.contenedor}>
                <div className={classes.proton}></div>
                <div className={classes.proton2}></div>
                <div className={classes.electronOrbita}>
                    <div className={classes.estela} />
                    <div className={classes.electron} />
                    <div className={classes.electron2} />
                </div>
            </div>
        </>
    );
};

export default Atom;
