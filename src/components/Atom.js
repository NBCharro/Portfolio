import { useState } from 'react';
import classes from './Atom.module.css';

const Atom = (props) => {
	const [animacion, setAnimacion] = useState(false);
	const animacionHandler = () => {
		setAnimacion((prev) => !prev);
	};
	const enlace = (event) => {
		props.mostrarComponentes(event.target.attributes.direccion.nodeValue);
	};
	return (
		<>
			<div className={classes.contenedor}>
				<div
					className={`${classes.electronOrbita} ${animacion && classes.AnimacionPausada
						}`}
				>
					<div
						className={`${classes.electron} ${animacion && classes.AnimacionPausada
							}`}
						onMouseEnter={animacionHandler}
						onMouseLeave={animacionHandler}
						direccion={props.idioma === 'es' ? 'Inicio' : 'Home'}
						onClick={enlace}
					/>
					<div
						className={`${classes.electron2} ${animacion && classes.AnimacionPausada
							}`}
						onMouseEnter={animacionHandler}
						onMouseLeave={animacionHandler}
						direccion={
							props.idioma === 'es' ? 'Contacto' : 'Contact'
						}
						onClick={enlace}
					/>
				</div>
				<div className={classes.neutron} />
				<div
					className={classes.proton}
					direccion={props.idioma === 'es' ? 'Proyectos' : 'Projects'}
					onClick={enlace}
				/>
				<div className={classes.neutron2} />
				<div
					className={classes.proton2}
					direccion={
						props.idioma === 'es' ? 'Conocimientos' : 'Skills'
					}
					onClick={enlace}
				/>
			</div>
		</>
	);
};

export default Atom;
