import { useState } from "react";
import "./navbar.css"

function Navbar() {
	const [ocultarMenu, setOcultarMenu] = useState(true)
	function mostrarMenu() {
		setOcultarMenu(prevCheck => !prevCheck);
	}
	return (
		<div className="nav sticky">
			<input type="checkbox" id="nav-check" />
			<div className="nav-header">
				<div className="nav-title">
					NBCharro
				</div>
			</div>
			<div className="nav-btn">
				<label htmlFor="nav-check" onClick={mostrarMenu}>
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
			{/* <div className="nav-links"> */}
			<div className={ocultarMenu ? 'nav-links ocultarMenu' : 'nav-links'} onClick={mostrarMenu}>
				<a href="#inicio">Inicio</a>
				<a href="#proyectos">Proyectos</a>
				<a href="#conocimientos">Conocimientos</a>
				<a href="#sobreMi">Sobre mi</a>
				<a href="#contacto">Contacto</a>
			</div>
		</div >
	);
}

export default Navbar