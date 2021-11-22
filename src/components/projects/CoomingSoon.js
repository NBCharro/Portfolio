import CoomingSoonFoto from '../../resources/comingSoon.png';
import classes from './Ecolegas.module.css';

const CoomingSoon = (props) => {
	let texto = {};
	if (props.idioma !== 'es') {
		texto = {
			titulo: `Website under construction`,
			parrafo: `Website under construction`,
		};
	}
	if (props.idioma === 'es') {
		texto = {
			titulo: `Website en construcción`,
			parrafo: `Website en construcción.`,
		};
	}
	return (
		<div className={classes.contenedor}>
			<img
				src={CoomingSoonFoto}
				alt="CoomingSoon"
				className={classes.imagen}
			/>
			<h2 className={classes.titulo}>{texto.titulo}</h2>
			<div className={classes.texto}>{texto.parrafo}</div>
			<button className={classes.boton} disabled>
				Website
			</button>
		</div>
	);
};

export default CoomingSoon;
