import { useState } from 'react';
import classes from './Menu.module.css';

function Menu() {
	const [clicked, setClicked] = useState(false);
	function showHandler() {
		setClicked((prevState) => !prevState);
	}
	return (
		<nav>
			<ul
				className={`${classes.navLinks} ${clicked && classes.navLinksClicked
					}`}
			>
				<li>
					<h3 to="/" onClick={showHandler}>
						Inicio
					</h3>
				</li>
				<li >
					<h3 to="/ourservices" onClick={showHandler}>
						Nuestros Servicios{' '}
					</h3>
				</li>
				<li >
					<h3 to="/testimonials" onClick={showHandler}>
						Opiniones
					</h3>
				</li>
				<li >
					<h3 to="/contact" onClick={showHandler}>
						Contacto
					</h3>
				</li>
			</ul>
			<div
				className={`${classes.burger} ${clicked && classes.toggle}`}
				onClick={showHandler}
			>
				<div className={classes.lineaBurger1}></div>
				<div className={classes.lineaBurger2}></div>
				<div className={classes.lineaBurger3}></div>
			</div>
		</nav>
	);
}

export default Menu;
