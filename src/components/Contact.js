import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import Spinner from './form/Spinner'
import Social from './Social';
import ContactoModal from './form/ContactoModal';
import Backdrop from './form/Backdrop';
import classes from './Contact.module.css';

const Contact = (props) => {
	const nombreInputRef = useRef();
	const telefonoInputRef = useRef();
	const emailInputRef = useRef();
	const mensajeInputRef = useRef();
	const [loading, setLoading] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [mensaje, setMensaje] = useState('');
	let formulario = {};
	if (props.idioma !== 'es') {
		formulario = {
			titulo: 'Contact',
			subtitulo: `If you wanna get in touch, talk about projects or just say hello, fill out the form below or click on the social media icons.`,
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
			subtitulo: `Si quieres ponerte en contacto conmigo, hablar de proyectos o simplemente saludar, rellena el formulario que aparece a continuación o pincha en los iconos de redes sociales.`,
			nombre: `Nombre *`,
			email: `Email *`,
			telefono: `Telefono *`,
			mensaje: `Mensaje *`,
			enviar: `Enviar`,
		};
	}
	// Abrir y cerrar el modal
	function closeModalHandler() {
		setModalIsOpen(false);
	}
	function openModalHandler(mensaje) {
		setModalIsOpen(true);
		setMensaje(mensaje);
	}
	// Contacto
	const sendEmail = (event) => {
		event.preventDefault();
		// Comprobacion que los datos sean correctos
		if (nombreInputRef.current.value.replace(/ /g, '').length < 3) {
			openModalHandler('Nombre');
			return;
		}
		if (telefonoInputRef.current.value.length < 9) {
			openModalHandler('Telefono');
			return;
		}
		// Activar Spinner
		setLoading(true);

		// Enviamos el email de contacto mediante la API emailJS
		emailjs
			.sendForm(
				'service_8mm3ted',
				'template_e4njemc',
				event.target,
				'user_wTIFtMhPLnlKGMqxxoYFh'
			)
			.then(
				(result) => {
					setLoading(false);
					openModalHandler('Ok');
					// Limpiar los campos
					nombreInputRef.current.value = '';
					telefonoInputRef.current.value = '';
					emailInputRef.current.value = '';
					mensajeInputRef.current.value = '';
				},
				(error) => {
					setLoading(false);
					openModalHandler('Error');
					return;
				}
			);

		// setTimeout(() => {
		// 	setLoading(false);
		// 	openModalHandler('Ok');
		// 	// openModalHandler('Error');
		// 	// openModalHandler('Telefono');
		// 	// openModalHandler('Nombre');
		// }, 1000);
	}
	return (
		<>
			{modalIsOpen && (
				<ContactoModal
					onConfirm={closeModalHandler}
					mensaje={mensaje}
					idioma={props.idioma}
					nombre={nombreInputRef.current.value}
				/>
			)}
			{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
			<div className={classes.contacto}>
				<p className={classes.estiloTag}>{'<h2>'}</p>
				<h2 className={classes.titulo}>{formulario.titulo}</h2>
				<p className={classes.estiloTag}>{'</h2>'}</p>
				<p className={classes.estiloTag}>{'<p>'}</p>
				<p className={classes.subtitulo}>{formulario.subtitulo}</p>
				<p className={classes.estiloTag}>{'</p>'}</p>
				<p className={classes.estiloTag}>{'<form>'}</p>
				<form action="#" onSubmit={sendEmail}>
					<input
						placeholder={formulario.nombre}
						name="name"
						type="text"
						ref={nombreInputRef}
						required
					/>
					<input
						placeholder={formulario.email}
						name="email"
						type="email"
						ref={emailInputRef}
						required
					/>
					<input
						placeholder={formulario.telefono}
						name="phone"
						type="number"
						size="9"
						ref={telefonoInputRef}
						required
					/>
					<textarea
						placeholder={formulario.mensaje}
						type="text"
						name="message"
						rows="4"
						ref={mensajeInputRef}
					/>
					<div className={classes.divBoton}>
						<p className={classes.estiloTag}>{'<button>'}</p>
						{!loading &&
							<input
								className={classes.boton}
								id="submit"
								value={formulario.enviar}
								type="submit"
							/>
						}
						{loading && <Spinner />}
						<p className={classes.estiloTag}>{'</button>'}</p>
					</div>
					<p className={classes.estiloTag}>{'</form>'}</p>
					<div className={classes.iconos}>
						<Social />
					</div>
				</form>
			</div>
		</>
	);
};

export default Contact;
