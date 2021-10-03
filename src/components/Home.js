import { useEffect, useState } from 'react';
import classes from './Home.module.css';

const Home = (props) => {
    const [nombre, setNombre] = useState([
        'N',
        'B',
        'C',
        'h',
        'a',
        'r',
        'r',
        'o',
    ]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setNombre([
                'N',
                'e',
                'l',
                's',
                'o',
                'n',
                ' ',
                'B',
                'l',
                'a',
                'n',
                'c',
                'o',
            ]);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    const idiomaTexto = () => {
        if (props.idioma === 'es') {
            return (
                <h1 className={classes.texto}>
                    Hola, mi nombre es{' '}
                    <span className={classes.nombre}>
                        {nombre.map((letra) => (
                            <span key={Math.random()}>{letra}</span>
                        ))}
                    </span>
                    <br />
                    Soy un desarrollador web front-end.
                    <br />
                    Diseño interfaces interactivas centradas en humanos.
                </h1>
            );
        }
        if (props.idioma !== 'es') {
            return (
                <h1 className={classes.texto}>
                    Hello, I'm{' '}
                    <span className={classes.nombre}>
                        {nombre.map((letra) => (
                            <span key={Math.random()}>{letra}</span>
                        ))}
                    </span>
                    <br />
                    I'm a front-end web developer.
                    <br />I design interactive interfaces centered on humans.
                </h1>
            );
        }
    };
    return (
        <div className={classes.home}>
            <p className={classes.estiloTag}>{'<h1>'}</p>
            {idiomaTexto()}
            <p className={classes.estiloTag}>{'</h1>'}</p>
            <p className={classes.estiloTag}>{'<button>'}</p>
            <div className={classes.divBoton}>
                <button className={classes.boton} onClick={props.pulsado}>
                    Acceder
                </button>
                <p className={classes.estiloTag}>{'</button>'}</p>
            </div>
        </div>
    );
};

export default Home;
