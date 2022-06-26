import React from "react";
import Card from "./Card";
import classes from './Projects.module.css';
import Ecolegas from "../resources/ecolegas.png"
import enConstruccion from "../resources/comingSoon.png"
import { motion } from 'framer-motion';

function Projects(props) {
	let textoEcolegas = {};
	let textoSoon = {};
	if (props.idioma !== 'es') {
		textoEcolegas = {
			titulo: `Farming company website`,
			parrafo: `Route, Hooks, modals, props and the EmailJS API have been used to simulate a Newsletter that is automatically sent to the entered email.`,
		};
		textoSoon = {
			titulo: `Website under construction`,
			parrafo: `Website under construction`,
		};
	}
	if (props.idioma === 'es') {
		textoEcolegas = {
			titulo: `Website de empresa agricola`,
			parrafo: `Se ha usado Route, Hooks, modales, props y la API EmailJS para simular una Newsletter que se envía automáticamente al email introducido.`,
		};
		textoSoon = {
			titulo: `Website en construcción`,
			parrafo: `Website en construcción.`,
		};
	}
	const animation = {
		hidden1: { opacity: 0, x: -200 },
		hidden2: { opacity: 0, y: -100 },
		hidden3: { opacity: 0, x: 200 },
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 1,
				delay: 1
			}
		},
		exit1: {
			opacity: 0,
			x: -200,
			transition: {
				duration: 0.5
			}
		},
		exit2: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 0.5
			}
		},
		exit3: {
			opacity: 0,
			x: 200,
			transition: {
				duration: 0.5
			}
		}
	};
	return (
		<div className={classes.container}>
			<motion.div
				key="proyecto1"
				variants={animation}
				initial="hidden1"
				animate="visible"
				exit="exit1"
			>
				<Card
					imagen={Ecolegas}
					title={textoEcolegas.titulo}
					description={textoEcolegas.parrafo}
					website="https://ecolegas.netlify.app/"
				/>
			</motion.div>
			<motion.div
				key="proyecto2"
				variants={animation}
				initial="hidden2"
				animate="visible"
				exit="exit2"
			>
				<Card
					imagen={enConstruccion}
					title={textoSoon.titulo}
					description={textoSoon.parrafo}
					website=""
				/>
			</motion.div>
			<motion.div
				key="proyecto3"
				variants={animation}
				initial="hidden3"
				animate="visible"
				exit="exit3"
			>
				<Card
					imagen={enConstruccion}
					title={textoSoon.titulo}
					description={textoSoon.parrafo}
					website=""
				/>
			</motion.div>
		</div>
	);
}

export default Projects;
