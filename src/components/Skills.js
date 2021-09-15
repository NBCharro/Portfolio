import React from 'react';
import Esfera from './Esfera';
import classes from './Skills.module.css';

const Skills = (props) => {
    let texto;
    if (props.idioma !== 'es') {
        texto = `I’m a front-end web developer with over a decade of experience. I work with agencies across the globe to create high performance & rich interactive websites that work across all platforms & devices. Although I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, SVG & JavaScript. With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance. In a quest for always keeping myself updated, I read books and attend conferences & meetups.`;
    }
    if (props.idioma === 'es') {
        texto = `Soy un desarrollador web front-end con más de una década de experiencia. Trabajo con agencias de todo el mundo para crear sitios web de alto rendimiento y ricos en interactividad que funcionan en todas las plataformas y dispositivos. Aunque estoy muy familiarizado con el uso de frameworks, mis sitios web son principalmente codificados a mano usando HTML5, CSS3, SVG y JavaScript. Con un fuerte énfasis en la "Mejora Progresiva", busco formas creativas de empujar los límites del código front-end del sitio web sin comprometer el soporte del navegador y el rendimiento. En una búsqueda por mantenerme siempre actualizado, leo libros y asisto a conferencias y reuniones.`;
    }
    return (
        <div className={classes.contenedor}>
            <div className={classes.texto}>{texto}</div>
            <div className={classes.texto}>
                <Esfera />
            </div>
        </div>
    );
};

export default Skills;
