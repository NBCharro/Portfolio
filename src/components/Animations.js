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
        from: {
            scale: 0,
        },
        to: {
            y: ['25px', '50px', '-75px', '25px'],
            x: ['15px', '150px', '-25px', '0px'],
            scale: 1,
            transition: { duration: 1 },
        },
        exitHome: { scale: 0, transition: { duration: 1.5 } },
        atomo: {
            y: ['25px', '50px', '75px', '25px'],
            x: ['15px', '150px', '-25px', '0px'],
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
        },
        exit: {
            scale: 0,
            transition: { duration: 1.5 },
        },
    };
    return (
        <>
            <AnimatePresence>
                {acceder && (
                    <motion.div variants={containerVariants} exit="exitHome">
                        <Home pulsado={entrarHandler} idioma={props.idioma} />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {atomo && (
                    <motion.div
                        variants={containerVariants}
                        initial="from"
                        animate="to"
                        exit="exit"
                    >
                        <Atom
                            idioma={props.idioma}
                            mostrarComponentes={mostrarComponentes}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {proyectos && <Projects idioma={props.idioma} />}
            </AnimatePresence>
            <AnimatePresence>
                {skills && <Skills idioma={props.idioma} />}
            </AnimatePresence>
            <AnimatePresence>
                {contacto && <Contact idioma={props.idioma} />}
            </AnimatePresence>
        </>
    );
};

export default Animations;
