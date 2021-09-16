import React from 'react';
import Social from './Social';
import classes from './Contact.module.css';

const Contact = (props) => {
    let formulario = {};
    if (props.idioma !== 'es') {
        formulario = {
            nombre: `Your Name *`,
            email: `Your Email *`,
            telefono: `Your Phone *`,
            mensaje: `Your Message *`,
            enviar: `Submit`,
        };
    }
    if (props.idioma === 'es') {
        formulario = {
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
            <h2>Contacto</h2>
            <p className={classes.estiloTag}>{'</h2>'}</p>
            <p className={classes.estiloTag}>{'<p>'}</p>
            <p>
                If you wanna get in touch, talk to me about a project
                collaboration or just say hi, fill up the awesome form below or
                send an email to EMAIL and ~let's talk.
            </p>
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
                    min="6"
                    max="6"
                    required
                />
                <textarea
                    placeholder={formulario.mensaje}
                    type="text"
                    name="message"
                />
                <input
                    className="button"
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
