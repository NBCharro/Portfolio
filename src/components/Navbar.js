import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import classes from './Navbar.module.css';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = (props) => {
	const [isToggled, setToggle] = useState(false);

	const navContainer = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				x: { velocity: 100 },
				duration: 0.3
			}
		},
		hidden: {
			x: -250,
			opacity: 0,
			transition: {
				x: { velocity: 100 },
				duration: 0.3
			}
		}
	};

	const mostrarComponentes = (componente) => {
		props.mostrarComponentes(componente.target.innerText);
		setToggle(!isToggled);
	};

	const esMovil = true;

	return (
		<>
			<button className={classes.btn} onClick={() => setToggle(!isToggled)}>
				{!isToggled ? "=" : "x"}
			</button>
			<AnimatePresence>
				{isToggled && (
					<motion.div
						className={classes.navbar}
						initial="hidden"
						animate={isToggled ? "visible" : "hidden"}
						exit="hidden"
						variants={navContainer}
					>
						<NavbarItems isToggled={isToggled} idioma={props.idioma} mostrarComponente={mostrarComponentes} esMovil={esMovil} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
