import EcolegasFoto from '../../resources/ecolegas.png';
import classes from './Ecolegas.module.css';

const Ecolegas = (props) => {
	let texto = {};
	if (props.idioma !== 'es') {
		texto = {
			titulo: `Farming company website`,
			parrafo: `Route, Hooks, modals, props and the EmailJS API have been used to simulate a Newsletter that is automatically sent to the entered email.`,
		};
	}
	if (props.idioma === 'es') {
		texto = {
			titulo: `Website de empresa agricola`,
			parrafo: `Se ha usado Route, Hooks, modales, props y la API EmailJS para simular una Newsletter que se envía automáticamente al email introducido.`,
		};
	}
	const goToUrl = () => {
		window.open(
			"https://ecolegas.netlify.app/",
			'_blank'
		);
	}
	return (
		<div className={classes.contenedor}>
			<img
				src={EcolegasFoto}
				alt="Website Ecolegas"
				className={classes.imagen}
			/>
			<h2 className={classes.titulo}>
				{texto.titulo}
			</h2>
			<div className={classes.texto}>
				{texto.parrafo}
			</div>
			<button className={classes.boton} name='Ecolegas' onClick={goToUrl} >
				Website
			</button>
		</div>
	);
};

export default Ecolegas;
