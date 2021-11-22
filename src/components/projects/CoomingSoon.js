import CoomingSoonFoto from '../../resources/comingSoon.png';
import classes from './Ecolegas.module.css';

const CoomingSoon = (props) => {
	return (
		<div className={classes.contenedor}>
			<img
				src={CoomingSoonFoto}
				alt="CoomingSoon"
				className={classes.imagen}
			/>
			<h2 className={classes.titulo}>Website en construccion</h2>
			<div className={classes.texto}>Website en construccion</div>
			<button className={classes.boton} disabled>
				Website
			</button>
		</div>
	);
};

export default CoomingSoon;
