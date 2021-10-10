// import Componente1 from './components/Componente1';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Fondo from './components/Fondo';
import Home from './components/Home';
import Atom from './components/Atom';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    const [acceder, setAcceder] = useState(true);
    const [idioma, setIdioma] = useState(navigator.language);
    const [atomo, setAtomo] = useState(false);
    const [proyectos, setProyectos] = useState(false);
    const [skills, setSkills] = useState(false);
    const [contacto, setContacto] = useState(false);
    const cambiarIdioma = () => {
        if (idioma === 'es') {
            setIdioma('en-US');
        }
        if (idioma !== 'es') {
            setIdioma('es');
        }
    };
    const entrarHandler = () => {
        setAtomo(true);
        setAcceder(false);
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
            setAcceder(true);
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
        from: {
            y: '150px',
            opacity: 0,
        },
        to: {
            y: '25px',
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: { y: '150px', opacity: 0, transition: { duration: 2 } },
    };
    return (
        <Fondo cambiarIdioma={cambiarIdioma} idioma={idioma}>
            {/* <Componente1 click={Handler} pulsado={acceder} /> */}
            {acceder && <Home pulsado={entrarHandler} idioma={idioma} />}
            {atomo && (
                <motion.div
                    variants={containerVariants}
                    initial="from"
                    animate="to"
                    exit="exit"
                >
                    <Atom
                        idioma={idioma}
                        mostrarComponentes={mostrarComponentes}
                    />
                </motion.div>
            )}
            {proyectos && <Projects idioma={idioma} />}
            {skills && <Skills idioma={idioma} />}
            {contacto && <Contact idioma={idioma} />}
        </Fondo>
    );
}

export default App;
