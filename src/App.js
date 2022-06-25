import { useState } from 'react';
import Fondo from './components/Fondo';
import Animations from './components/Animations';

function App() {
	const [idioma, setIdioma] = useState(navigator.language);
	const cambiarIdioma = () => {
		if (idioma === 'es') {
			setIdioma('en-US');
		}
		if (idioma !== 'es') {
			setIdioma('es');
		}
	};

	return (
		<Fondo cambiarIdioma={cambiarIdioma} idioma={idioma}  >
			<Animations idioma={idioma} />
		</Fondo >
	);
}

export default App;
