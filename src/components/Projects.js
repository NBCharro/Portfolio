import React from "react";
import Card from "./projects/Card";
import classes from './Projects.module.css';
import Ecolegas from "../resources/ecolegas.png"
import enConstruccion from "../resources/comingSoon.png"

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
	return (
		<div className={classes.container}>
			<Card
				imagen={Ecolegas}
				title={textoEcolegas.titulo}
				description={textoEcolegas.parrafo}
				website="https://ecolegas.netlify.app/"
			/>
			<Card
				imagen={enConstruccion}
				title={textoSoon.titulo}
				description={textoSoon.parrafo}
				website=""
			/>
			<Card
				imagen={enConstruccion}
				title={textoSoon.titulo}
				description={textoSoon.parrafo}
				website=""
			/>
		</div>
	);
}

export default Projects;
