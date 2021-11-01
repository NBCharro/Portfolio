import Esfera from './Esfera';
import classes from './Skills.module.css';

const Skills = (props) => {
    let texto = {};
    if (props.idioma !== 'es') {
        texto = {
            titulo: `Skills`,
            parrafo1: `I'm passionate about creating software that improves the lives of those around me, so I build interactive websites that run on all platforms and devices. The main area of my interest is front-end. My passion for programming started with the Motorola V300 by creating small lines of code to set my favorite songs as a ringtone.`,
            parrafo2: `With web standards constantly evolving, it's essential to keep up with the latest and greatest in front-end code, whether it's tools, design patterns or “best practices”. The most important thing for me in my job is to understand the client's tasks, and deliver the most relevant solution.`,
            parrafo3: `I am a curious person, who is passionate about programming, nature, dogs, books, and movies. I love to stare at a not-so-bright screen while I reach the solution to the code that has been giving me compilation errors for days.`,
        };
    }
    if (props.idioma === 'es') {
        texto = {
            titulo: `Conocimientos`,
            parrafo1: `Me apasiona crear software que mejore la vida de los que me rodean, por ello construyo sitios web interactivas que se ejecuten en todas las plataformas y dispositivos. El área principal de mi interés es el front-end. Mi pasión por la programación comenzó con el Motorola V300 al crear pequeñas líneas de código para establecer mis canciones favoritas como tono de llamada.`,
            parrafo2: `Con los estándares web en constante evolución, es esencial mantenerse al día con lo último y lo mejor en el código frontend, tanto si se trata de herramientas, patrones de diseño o “mejores prácticas”. Lo más importante para mí en mi trabajo es entender las tareas del cliente, y ofrecer la solución más relevante.`,
            parrafo3: `Soy una persona curiosa, a la que le apasiona la programación, la naturaleza, los perros, los libros y las películas. Me encanta mirar fijamente una pantalla no muy brillante mientras alcanzo la solución al código que lleva días dándome errores de compilación.`,
        };
    }
    return (
        <div className={classes.contenedor}>
            <div className={classes.texto}>
                <p className={classes.estiloTag}>{'<h2>'}</p>
                <h2 className={classes.titulo}>{texto.titulo}</h2>
                <p className={classes.estiloTag}>{'</h2>'}</p>
                <p className={classes.estiloTag}>{'<p>'}</p>
                <p>{texto.parrafo1}</p>
                <p className={classes.parrafo2}>{texto.parrafo2}</p>
                <p>{texto.parrafo3}</p>
                <p className={classes.estiloTag}>{'</p>'}</p>
            </div>
            <div className={classes.esferaGrupo}>
                <p className={classes.estiloTag}>{'<div>'}</p>
                <div className={classes.esfera}>
                    <Esfera />
                </div>
                <p className={classes.estiloTag}>{'</div>'}</p>
            </div>
        </div>
    );
};

export default Skills;
