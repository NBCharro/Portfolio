import Sun from './Sun';
import Ecolegas from './projects/Ecolegas';
import CoomingSoon from './projects/CoomingSoon';
import SolFoto from '../resources/sun1.png';
import SolFoto2 from '../resources/sun2.png';
import SolFoto3 from '../resources/sun3.png';
import SolFoto4 from '../resources/sun4.png';
import classes from './Projects.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
	const [solClickado, setSolClickado] = useState(false);
	const [solActivo, setSolActivo] = useState('');
	const [coordenadas, setCoordenadas] = useState([]);
	const onSubmit = (sol) => {
		setSolClickado((prev) => !prev);
		setSolActivo(sol);
	};
	const pantalla = window.innerWidth;
	const pantallavertical = window.innerHeight;
	const centrar = (e) => {
		setCoordenadas([
			e.target.parentElement.parentElement.offsetTop,
			e.target.parentElement.parentElement.offsetLeft,
		]);
	};
	const containerVariants = {
		sol0: {
			scale: pantalla > 1080 ? 0.5 : 0.35,
			rotate: 60,
			boxShadow: '0 0 125px 150px #ed2408',
			transition: { duration: 1 },
		},
		sol1: {
			scale: pantalla > 1080 ? 0.25 : 0.2,
			rotate: 30,
			boxShadow: '0 0 150px 200px #ed2408',
			transition: { duration: 1 },
		},
		sol2: {
			scale: pantalla > 1080 ? 0.75 : 0.45,
			rotate: 22,
			transition: { duration: 1 },
		},
		sol3: {
			scale: pantalla > 1080 ? 0.35 : 0.28,
			rotate: 0,
			boxShadow: '0 0 200px 150px #ed2408',
			transition: { duration: 1 },
		},
		inactivo: {
			scale: 0,
			rotate: 0,
			transition: { duration: 0.5 },
		},
		to: {
			scale: pantalla > 640 ? 1.6 : 1,
			rotate: 0,
			x: pantalla / 2 - coordenadas[1],
			y: pantallavertical / 2 - coordenadas[0],
			boxShadow: '0 0 0px 0px #ed2408',
			transition: { duration: 1 },
		},
		sol0Initial: {
			x: '-100px',
			y: '-100px',
			opacity: 0,
		},
		sol1Initial: {
			x: '100px',
			y: '-100px',
			opacity: 0,
		},
		sol2Initial: {
			x: '100px',
			y: '100px',
			opacity: 0,
		},
		sol3Initial: {
			x: '-100px',
			y: '100px',
			opacity: 0,
		},
		mover: {
			filter: ['contrast(100%)', 'contrast(150%)', 'contrast(100%)'],
			transition: { repeat: Infinity, duration: 5, ease: 'linear' },
		},
		hasta: {
			x: '0px',
			y: '0px',
			opacity: 1,
			transition: { duration: 1 },
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 1
			},
		},
	};
	return (
		<>
			<motion.div
				className={classes.contenedorSoles}
				variants={containerVariants}
				exit="exit"
			>
				<motion.div
					className={classes.sol0}
					variants={containerVariants}
					initial={['sol0Initial', 'sol0']}
					animate={[
						'mover',
						'hasta',
						solClickado
							? solActivo === 'sol0'
								? 'to'
								: 'inactivo'
							: '',
					]}
					onClick={centrar}
				>
					<Sun imagen={SolFoto} clickado={onSubmit} nombre="sol0">
						<CoomingSoon />
					</Sun>
				</motion.div>
				<motion.div
					className={classes.sol1}
					variants={containerVariants}
					initial={['sol1Initial', 'sol1']}
					animate={[
						'mover',
						'hasta',
						solClickado
							? solActivo === 'sol1'
								? 'to'
								: 'inactivo'
							: '',
					]}
					onClick={centrar}
				>
					<Sun imagen={SolFoto4} clickado={onSubmit} nombre="sol1">
						<CoomingSoon />
					</Sun>
				</motion.div>
				<motion.div
					className={classes.sol2}
					variants={containerVariants}
					initial={['sol2Initial', 'sol2']}
					animate={[
						'mover',
						'hasta',
						solClickado
							? solActivo === 'sol2'
								? 'to'
								: 'inactivo'
							: '',
					]}
					onClick={centrar}
				>
					<Sun imagen={SolFoto2} clickado={onSubmit} nombre="sol2">
						<Ecolegas />
					</Sun>
				</motion.div>
				<motion.div
					className={classes.sol3}
					variants={containerVariants}
					initial={['sol3Initial', 'sol3']}
					animate={[
						'mover',
						'hasta',
						solClickado
							? solActivo === 'sol3'
								? 'to'
								: 'inactivo'
							: '',
					]}
					onClick={centrar}
				>
					<Sun imagen={SolFoto3} clickado={onSubmit} nombre="sol3">
						<CoomingSoon />
					</Sun>
				</motion.div>
			</motion.div>
		</>
	);
};

export default Projects;
