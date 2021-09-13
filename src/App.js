// import Componente1 from './components/Componente1';
import { useState } from 'react';
import Fondo from './components/Fondo';
import Atom from './components/Atom';
import Home from './components/Home';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Skills from './components/Skills';

function App() {
    const [clicked, setClicked] = useState(false);
    const [idioma, setIdioma] = useState(navigator.language);
    const cambiarIdioma = () => {
        if (idioma === 'es') {
            setIdioma('en-US');
        }
        if (idioma !== 'es') {
            setIdioma('es');
        }
    };
    function Handler(event) {
        event.preventDefault();
        setClicked((prev) => !prev);
    }
    return (
        <>
            <Fondo cambiarIdioma={cambiarIdioma} idioma={idioma}>
                {/* <Componente1 click={Handler} pulsado={clicked} /> */}
                {/* <Home click={Handler} pulsado={clicked} idioma={idioma} /> */}
                <Atom />
            </Fondo>
        </>
    );
}

export default App;
