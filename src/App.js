// import Componente1 from './components/Componente1';
import { useState } from 'react';
import Fondo from './components/Fondo';
// import Home from './components/Home';
// import Atom from './components/Atom';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
import Contact from './components/Contact';

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
    function direccion(link) {
        console.log(link);
    }
    // Console para evitar avisos por no usar
    console.log(direccion, Handler, clicked);
    return (
        <>
            <Fondo cambiarIdioma={cambiarIdioma} idioma={idioma}>
                {/* <Componente1 click={Handler} pulsado={clicked} /> */}
                {/* <Home click={Handler} pulsado={clicked} idioma={idioma} /> */}
                {/* <Atom idioma={idioma} direccion={direccion} /> */}
                {/* <Projects /> */}
                {/* <Skills idioma={idioma} /> */}
                <Contact idioma={idioma} />
            </Fondo>
        </>
    );
}

export default App;
