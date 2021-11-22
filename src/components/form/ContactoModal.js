import classes from './ContactoModal.module.css';

const ContactoModal = (props) => {
	let mensaje;
	let enviar;
	if (props.idioma !== 'es') {
		if (props.mensaje === 'Ok') {
			mensaje =
				`Thank you for contacting me ${props.nombre}, you will receive a reply shortly.`;
		}
		if (props.mensaje === 'Error') {
			mensaje =
				'An error occurred that did not allow the connection. Please try again.';
		}
		if (props.mensaje === 'Telefono') {
			mensaje = 'Please enter a 9 digit phone number.';
		}
		if (props.mensaje === 'Nombre') {
			mensaje =
				'Please note that the name field must be at least 3 characters long.';
		}
		enviar = 'Confirm';
	}
	if (props.idioma === 'es') {
		if (props.mensaje === 'Ok') {
			mensaje =
				`Gracias por ponerse en contacto conmigo ${props.nombre}, en breve recibirá una respuesta.`;
		}
		if (props.mensaje === 'Error') {
			mensaje =
				'Ha ocurrido un error que no ha permitido la conexion. Por favor, intentelo de nuevo.';
		}
		if (props.mensaje === 'Telefono') {
			mensaje = 'Por favor, introduzca un numero de telefono de 9 digitos.';
		}
		if (props.mensaje === 'Nombre') {
			mensaje =
				'Por favor, el campo de nombre debe tener al menos 3 caracteres.';
		}
		enviar = 'Confirmar';
	}
	function confirmHandler() {
		props.onConfirm();
	}
	return (
		<div className={classes.modal}>
			<div className={classes.texto}>{mensaje}</div>
			<button className={classes.btn} onClick={confirmHandler}>
				{enviar}
			</button>
		</div>
	);
};

export default ContactoModal;
