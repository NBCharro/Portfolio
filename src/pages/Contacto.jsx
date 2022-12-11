import './contacto.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contacto() {
	const form = useRef();
	const [mensajeEnvio, setMensajeEnvio] = useState()
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_8mm3ted', 'template_e4njemc', form.current, 'user_wTIFtMhPLnlKGMqxxoYFh')
			.then((result) => {
				setMensajeEnvio("enviado")
			}, (error) => {
				setMensajeEnvio("error")
			});
	};

	return (
		<div id='contacto'>
			<p className='estiloTag'>{'<h3>'}</p>
			<h3>Contacto</h3>
			<p className='estiloTag'>{'</h3>'}</p>
			<p className='estiloTag'>{'</p>'}</p>
			<p>Si quieres ponerte en contacto conmigo, hablar de proyectos o simplemente saludar, rellena el formulario o pincha en los iconos mis redes sociales.</p>
			<p className='estiloTag'>{'</p>'}</p>
			<p className='estiloTag'>{'<form>'}</p>
			<form ref={form} onSubmit={sendEmail}>
				<label htmlFor="name">Nombre</label>
				<input
					placeholder='Nombre'
					name="name"
					id='name'
					type="text"
					required
				/>
				<label htmlFor="email">Email</label>
				<input
					placeholder='Email'
					name="email"
					id="email"
					type="email"
					required
				/>
				<label htmlFor="phone">Teléfono</label>
				<input
					placeholder='Teléfono'
					name="phone"
					id="phone"
					type="number"
					size="9"
					required
				/>
				<label htmlFor="message">Mensaje</label>
				<textarea
					placeholder='Mensaje'
					name="message"
					id="message"
					type="text"
					rows="4"
				/>
				<input type="submit" value="Enviar" name='enviar' />
				{mensajeEnvio == "enviado" ? <p className='mensajeContacto'>Gracias por contactar conmigo.</p> : ""}
				{mensajeEnvio == "error" ? <p className='mensajeContacto'>No se ha podido enviar el mensaje.</p> : ""}
			</form>
			<p className='estiloTag'>{'</form>'}</p>
		</div>
	)
}

export default Contacto