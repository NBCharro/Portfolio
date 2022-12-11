import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Portada from './pages/Portada.jsx'
import Proyectos from './pages/Proyectos.jsx'
import Conocimientos from './pages/Conocimientos.jsx'
import SobreMi from './pages/SobreMi.jsx'
import Contacto from './pages/Contacto.jsx'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
	// const [scroll, setScroll] = useState(0);
	const [proyectos, setProyectos] = useState(false);
	const [conocimientos, setConocimientos] = useState(false);
	const [sobreMi, setSobreMi] = useState(false);
	const [contacto, setContacto] = useState(false);
	const [footer, setFooter] = useState(false);
	useEffect(() => {
		const handleScroll = event => {
			if (window.scrollY >= 100) {
				setProyectos(true)
			}
			if (window.scrollY >= 500) {
				setConocimientos(true)
			}
			if (window.scrollY >= 900) {
				setSobreMi(true)
			}
			if (window.scrollY >= 1300) {
				setContacto(true)
			}
			if (window.scrollY >= 1800) {
				setFooter(true)
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<Navbar />
			<div className='contenedor' >
				<Portada />
				<div className={proyectos ? 'aparicion' : 'ocultar'}>
					<Proyectos />
				</div>
				<div className={conocimientos ? 'aparicion' : 'ocultar'}>
					<Conocimientos />
				</div>
				<div className={sobreMi ? 'aparicion' : 'ocultar'}>
					<SobreMi />
				</div>
				<div className={contacto ? 'aparicion' : 'ocultar'}>
					<Contacto />
				</div>
				<div className={footer ? 'aparicion' : 'ocultar'}>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
