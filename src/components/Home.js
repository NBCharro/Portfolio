import { useEffect, useState } from 'react';
import classes from './Home.module.css';

const Home = (props) => {
	const [nombre, setNombre] = useState('N B Charro');
	useEffect(() => {
		const timer = setTimeout(() => {
			setNombre('Nelson Blanco');
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, []);
	const idiomaTexto = () => {
		if (props.idioma === 'es') {
			return (
				<h1 className={classes.texto}>
					Hola, mi nombre es
					<br />
					<span className={classes.nombre}>
						{nombre.split('').map((letra) => (
							<span key={Math.random()}>{letra}</span>
						))}
					</span>
					<br />
					Soy un desarrollador full-stack.
					<br />
					Programo interfaces interactivas centradas en la usabilidad.
				</h1>
			);
		}
		if (props.idioma !== 'es') {
			return (
				<h1 className={classes.texto}>
					Hello, my name is
					<br />
					<span className={classes.nombre}>
						{nombre.split('').map((letra) => (
							<span key={Math.random()}>{letra}</span>
						))}
					</span>
					<br />
					I'm a full-stack developer.
					<br />I program interactive interfaces focused on usability.
				</h1>
			);
		}
	};
	return (
		<div className={classes.home}>
			<p className={classes.estiloTag}>{'<h1>'}</p>
			{idiomaTexto()}
			<p className={classes.estiloTag}>{'</h1>'}</p>
			<div className={classes.star} />
			<div className={classes.star} />
			<div className={classes.star} />
			<div className={classes.star} />
			<div className={classes.star} />
			<div className={classes.agujero}>
				<p className={classes.estiloTag}>{'<button>'}</p>
				<button className={classes.boton} onClick={props.pulsado}>
					{props.idioma === 'es' ? 'Entrar' : 'Enter'}
				</button>
				<p className={classes.estiloTag}>{'</button>'}</p>
			</div>
		</div>
	);
};

export default Home;
