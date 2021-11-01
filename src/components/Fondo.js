import Tardis from './Tardis';
import classes from './Fondo.module.css';

const Fondo = (props) => {
    return (
        <div>
            <div
                className={classes.backgroundContainer}
                // onMouseMove={moverRaton}
            >
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
            <div className={classes.tardis}>
                <Tardis />
            </div>
            {props.children}
        </div>
    );
};

export default Fondo;
