import React, { useState } from 'react';
import classes from './Home.module.css';

const Home = (props) => {
    const [nombre, setNombre] = useState('NBCharro');
    setTimeout(() => {
        setNombre('Nelson Blanco');
        clearTimeout();
    }, 5000);
    const idiomaTexto = () => {
        if (props.idioma === 'es') {
            return (
                <div className={classes.texto}>
                    Hola, mi nombre es{' '}
                    <span className={classes.nombre}>{nombre}</span>.<br />
                    Soy un desarrollador web front-end.
                    <br />
                    Diseño interfaces interactivas centradas en humanos.
                </div>
            );
        }
        if (props.idioma !== 'es') {
            return (
                <div className={classes.texto}>
                    Hello, I'm <span className={classes.nombre}>{nombre}</span>.
                    <br />
                    I'm a front-end web developer.
                    <br />I design interactive interfaces centered on humans.
                </div>
            );
        }
    };
    return (
        <div className={classes.home}>
            {idiomaTexto()}
            <button className={classes.boton}>Acceder</button>
        </div>
    );
};

export default Home;
