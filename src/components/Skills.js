import { motion } from 'framer-motion';
import Esfera from './Esfera';
import classes from './Skills.module.css';

const Skills = (props) => {
	let texto = {};
	if (props.idioma !== 'es') {
		texto = {
			titulo: `Skills`,
			parrafo1: `I'm passionate about creating software that improves the lives of those around me, so I develop user-centered applications. My passion for programming started with the Motorola V300 when I wrote little lines of code to save my favorite songs as a ringtone.`,
			parrafo2: `With development standards constantly evolving, it is essential to keep up to date with the latest in frontend and backend code, whether it's tools, design patterns or “best practices”. The most important thing for me in my job is to understand the client's requirements, and deliver the best solution for their needs.`,
			parrafo3: `I am a curious person, passionate about programming, nature, beekeeping, dogs, tattoos, books and movies. I love to stare at a not-so-bright screen while I reach the solution to the code that has been giving me compilation errors for days.`,
		};
	}
	if (props.idioma === 'es') {
		texto = {
			titulo: `Habilidades`,
			parrafo1: `Me apasiona crear software que mejore la vida de los que me rodean, por eso desarrollo aplicaciones centradas en el usuario. Mi pasión por la programación comenzó con el Motorola V300 al escribir pequeñas líneas de código para guardar mis canciones favoritas como tono de llamada.`,
			parrafo2: `Con los estándares de desarrollo en constante evolución, es esencial mantenerse al día con lo último en código frontend y backend, tanto si se trata de herramientas, patrones de diseño o “mejores prácticas”. Lo más importante para mí en mi trabajo es entender los requisitos del cliente, y ofrecer la mejor solución para sus necesidades.`,
			parrafo3: `Soy una persona curiosa, a la que le apasiona la programación, la naturaleza, la apicultura, los perros, los tatuajes, los libros y las películas. Me encanta mirar fijamente una pantalla no muy brillante mientras alcanzo la solución al código que lleva días dándome errores de compilación.`,
		};
	}
	const containerVariants = {
		textoInitial: { x: '-500px', opacity: 0, rotateY: 90 },
		textoAnimate: {
			x: '0px',
			opacity: 1,
			rotateY: 0,
			zIndex: '-1',
			transition: { duration: 1 },
		},
		esferaInitial: { x: '500px', opacity: 0, rotateY: -90 },
		esferaAnimate: {
			x: '0px',
			opacity: 1,
			rotateY: 0,
			zIndex: '1',
			transition: { duration: 1 },
		},
	};
	return (
		<div className={classes.contenedor}>
			<motion.div
				className={classes.texto}
				key="texto"
				variants={containerVariants}
				initial="textoInitial"
				animate="textoAnimate"
			>
				<p className={classes.estiloTag}>{'<h2>'}</p>
				<h2 className={classes.titulo}>{texto.titulo}</h2>
				<p className={classes.estiloTag}>{'</h2>'}</p>
				<p className={classes.estiloTag}>{'<p>'}</p>
				<p>{texto.parrafo1}</p>
				<p className={classes.parrafo2}>{texto.parrafo2}</p>
				<p>{texto.parrafo3}</p>
				<p className={classes.estiloTag}>{'</p>'}</p>
			</motion.div>
			<motion.div
				className={classes.esferaGrupo}
				key="esfera"
				variants={containerVariants}
				initial="esferaInitial"
				animate="esferaAnimate"
			>
				<p className={classes.estiloTag}>{'<div>'}</p>
				<div className={classes.esfera}>
					<Esfera />
				</div>
				<p className={classes.estiloTag}>{'</div>'}</p>
			</motion.div>
		</div>
	);
};

export default Skills;
