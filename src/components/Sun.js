import { useState } from 'react';
import classes from './Sun.module.css';

const Sun = (props) => {
    const [hoverSol, setHoverSol] = useState(false);
    const clicked = (e) => {
        e.preventDefault();
        props.clickado(props.nombre);
        setHoverSol((prev) => !prev);
    };
    return (
        <>
            <div className={classes.ui} onClick={clicked}>
                <div
                    className={classes.cover}
                    style={{
                        backgroundImage: `url(${!hoverSol && props.imagen})`,
                    }}
                >
                    <div className={classes.Hijo}>
                        {hoverSol && props.children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sun;
