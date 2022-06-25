import React from "react";
import classes from './Navbar.module.css';
import { motion } from "framer-motion";

const Navbar = (props) => {
	const items = ["Home", "Projects", "Skills", "Contact"];

	if (props.idioma === 'es') {
		items[0] = "Inicio";
		items[1] = "Proyectos";
		items[2] = "Conocimientos";
		items[3] = "Contacto";
	};

	const navList = {
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.07
			}
		},
		hidden: {
			opacity: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1
			}
		}
	};

	const navItem = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 }
			}
		},
		hidden: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 10, velocity: -10 }
			}
		}
	};

	const enlace = (event) => {
		//props.mostrarComponentes(event.target.attributes.direccion.nodeValue);
		props.mostrarComponente(event);
	};

	return (
		<>
			<motion.ul
				className={classes.navList}
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={navList}
			>
				{items.map((item) => (
					<motion.li className={classes.navItem} variants={navItem} key={item} onClick={enlace}>
						<p>{item}</p>
					</motion.li>
				))}
			</motion.ul>
		</>
	);
};

export default Navbar;
