import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import Atom from './Atom';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Animations = (props) => {
	const [acceder, setAcceder] = useState(true);
	const [atomo, setAtomo] = useState(false);
	const [proyectos, setProyectos] = useState(false);
	const [skills, setSkills] = useState(false);
	const [contacto, setContacto] = useState(false);
	const entrarHandler = () => {
		setAcceder(false);
		setTimeout(() => {
			setAtomo(true);
		}, 2000);
	};
	const ocultarComponentes = () => {
		setProyectos(false);
		setSkills(false);
		setContacto(false);
	};
	const mostrarComponentes = (componente) => {
		ocultarComponentes();
		if (componente === 'Home' || componente === 'Inicio') {
			setAtomo(false);
			setTimeout(() => {
				setAcceder(true);
			}, 2000);
		}
		if (componente === 'Projects' || componente === 'Proyectos') {
			setProyectos(true);
		}
		if (componente === 'Skills' || componente === 'Conocimientos') {
			setSkills(true);
		}
		if (componente === 'Contact' || componente === 'Contacto') {
			setContacto(true);
		}
	};
	const containerVariants = {
		atomoHover: {
			scale: 1
		},
		atomo: {
			scale: 0,
			position: 'relative',
			zIndex: 4,
		},
		atomoAnimate: {
			y: ['25px', '50px', '-75px', '150px'],
			x: ['15px', '150px', '-25px', '0px'],
			scale: 1,
			transition: { duration: 1 },
		},
		atomoExit: {
			opacity: 0,
			transition: { duration: 1 },
		},
		Home: {
			y: '50px',
		},
		exitHome: {
			opacity: 0,
			transition: { duration: 1 },
		},
		atomoPulsado: {
			y: '0%',
			x: '30%',
			scale: 0.4,
			transition: { duration: 1 },
		},
		skillsExit: {
			opacity: 0,
			transition: {
				duration: 1
			},
		},
		contact: {
			y: '50px',
			position: 'relative',
			zIndex: -1,
			opacity: 0,
		},
		contactAnimate: {
			y: '0px',
			opacity: 1,
			zIndex: 2,
			transition: { duration: 1 },
		},
		contactExit: {
			opacity: 0,
			transition: {
				duration: 1
			},
		},
	};
	return (
		<>
			<AnimatePresence>
				{atomo && (
					<motion.div
						key="atom"
						variants={containerVariants}
						initial="atomo"
						animate={
							proyectos === true ||
								skills === true ||
								contacto === true
								? 'atomoPulsado'
								: 'atomoAnimate'
						}
						exit="atomoExit"
						whileHover='atomoHover'

					>
						<Atom
							idioma={props.idioma}
							mostrarComponentes={mostrarComponentes}
						/>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence exitBeforeEnter>
				{acceder && (
					<motion.div
						key="Home"
						variants={containerVariants}
						initial="Home"
						exit="exitHome"
					>
						<Home pulsado={entrarHandler} idioma={props.idioma} />
					</motion.div>
				)}
				{proyectos && (
					<motion.div key="projects">
						<Projects idioma={props.idioma} />
					</motion.div>
				)}
				{skills && (
					<motion.div
						key="skills"
						variants={containerVariants}
						exit="skillsExit"
					>
						<Skills idioma={props.idioma} />
					</motion.div>
				)}
				{contacto && (
					<motion.div
						key="contact"
						variants={containerVariants}
						initial="contact"
						animate="contactAnimate"
						exit="contactExit"
					>
						<Contact idioma={props.idioma} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Animations;
