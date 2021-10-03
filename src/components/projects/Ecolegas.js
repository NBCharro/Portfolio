import EcolegasFoto from '../../resources/ecolegas.png';
import classes from './Ecolegas.module.css';

const Ecolegas = (props) => {
    return (
        <div className={classes.contenedor}>
            <img
                src={EcolegasFoto}
                alt="Website Ecolegas"
                className={classes.imagen}
            />
            <h2 className={classes.titulo}>
                Website de ejemplo basada en ReactJS
            </h2>
            <div className={classes.texto}>
                Se han usado Route, Hooks. modales, props, entre otros y la API
                EmailJS para simular una Newsletter que se envia automaticamente
                al email introducido.
            </div>
            <button className={classes.boton}>
                <a
                    href="https://ecolegas.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.link}
                >
                    Website
                </a>
            </button>
        </div>
    );
};

export default Ecolegas;
