import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import Atom from './Atom';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Animations = (props) => {
    const [acceder, setAcceder] = useState(false);
    const [atomo, setAtomo] = useState(true);
    const [proyectos, setProyectos] = useState(true);
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
        atomoPulsado: {
            y: '0%',
            x: '30%',
            scale: 0.35,
            transition: { duration: 1 },
        },
        exitHome: {
            scale: 0,
            opacity: 0,
            y: '150px',
            x: '-15px',
            rotateY: 120,
            transition: { duration: 1.5 },
        },
        atomoExit: {
            scale: 0,
            transition: { duration: 1.5 },
        },
        contactExit: {
            y: '100px',
            position: 'relative',
            zIndex: -1,
            opacity: 0,
            transition: { when: 'beforeChildren', duration: 1 },
        },
        contact: {
            y: '100px',
            position: 'relative',
            zIndex: -1,
            opacity: 0,
        },
        contactAnimate: {
            y: '0px',
            opacity: 1,
            transition: { duration: 1 },
        },
        projects: {
            y: '-200px',
        },
        projectsAnimate: {
            y: '0px',
            opacity: 1,
        },
        projectsExit: {
            y: '-200px',
            transition: { duration: 2 },
        },
    };
    return (
        <>
            <AnimatePresence>
                {atomo && (
                    <motion.div
                        key="atom"
                        variants={containerVariants}
                        initial="from"
                        animate={
                            proyectos === true ||
                            skills === true ||
                            contacto === true
                                ? 'atomoPulsado'
                                : 'to'
                        }
                        exit="atomoExit"
                        whileHover={{ scale: 1 }}
                    >
                        <Atom
                            idioma={props.idioma}
                            mostrarComponentes={mostrarComponentes}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                {acceder && (
                    <motion.div
                        key="home"
                        variants={containerVariants}
                        exit="exitHome"
                        animate="Home"
                    >
                        <Home pulsado={entrarHandler} idioma={props.idioma} />
                    </motion.div>
                )}
                {proyectos && (
                    <motion.div
                        key="projects"
                        variants={containerVariants}
                        initial="projects"
                        animate="projectsAnimate"
                        exit="projectsExit"
                    >
                        <Projects idioma={props.idioma} />
                    </motion.div>
                )}
                {skills && (
                    <motion.div key="skills" variants={containerVariants}>
                        <Skills idioma={props.idioma} />
                    </motion.div>
                )}
                {contacto && (
                    <motion.div
                        key="contact"
                        variants={containerVariants}
                        initial="contact"
                        animate="contactAnimate"
                        exit="contactExit"
                    >
                        <Contact idioma={props.idioma} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Animations;
