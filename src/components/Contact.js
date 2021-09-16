import React from 'react';
import Social from './Social';
import classes from './Contact.module.css';

const Contact = (props) => {
    let formulario = {};
    if (props.idioma !== 'es') {
        formulario = {
            titulo: 'Contact',
            tituloArray: ['C', 'o', 'n', 't', 'a', 'c', 't'],
            subtitulo: `If you wanna get in touch, talk to me about projects or just say hi, fill up the awesome form below or send an email and let's talk.`,
            nombre: `Your Name *`,
            email: `Your Email *`,
            telefono: `Your Phone *`,
            mensaje: `Your Message *`,
            enviar: `Submit`,
        };
    }
    if (props.idioma === 'es') {
        formulario = {
            titulo: 'Contacto',
            tituloArray: ['C', 'o', 'n', 't', 'a', 'c', 't', 'o'],
            subtitulo: `Si quieres ponerte en contacto conmigo, hablar de proyectos o simplemente saludar, rellena el impresionante formulario que aparece a continuación o envía un correo electrónico y hablemos.`,
            nombre: `Nombre *`,
            email: `Email *`,
            telefono: `Telefono *`,
            mensaje: `Mensaje *`,
            enviar: `Enviar`,
        };
    }
    return (
        <div className={classes.contacto}>
            <Social />
            <p className={classes.estiloTag}>{'<h2>'}</p>
            {/* <h2>{formulario.titulo}</h2> */}
            <h2 className={classes.titulo}>
                {formulario.tituloArray.map((letra) => (
                    <span key={Math.random()}>{letra}</span>
                ))}
            </h2>
            <p className={classes.estiloTag}>{'</h2>'}</p>
            <p className={classes.estiloTag}>{'<p>'}</p>
            <p>{formulario.subtitulo}</p>
            <p className={classes.estiloTag}>{'</p>'}</p>
            <p className={classes.estiloTag}>{'<form>'}</p>
            <form action="#">
                <input
                    placeholder={formulario.nombre}
                    name="name"
                    type="text"
                    required
                />
                <input
                    placeholder={formulario.email}
                    name="email"
                    type="email"
                    required
                />
                <input
                    placeholder={formulario.telefono}
                    name="phone"
                    type="number"
                    size="6"
                    required
                />
                <textarea
                    placeholder={formulario.mensaje}
                    type="text"
                    name="message"
                    rows="4"
                />
                <input
                    className={classes.boton}
                    id="submit"
                    value={formulario.enviar}
                    type="submit"
                />
                <p className={classes.estiloTag}>{'</form>'}</p>
            </form>
        </div>
    );
};

export default Contact;
