

function Contact() {
	return (
		<section className="px-3 py-2 mx-auto">
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</h2>'}</p>
			<h2 className="text-primary text-2xl text-center">
				Contacto
			</h2>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</h2>'}</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'<p>'}</p>
			<p className='text-parrafo'>
				Si quieres ponerte en contacto conmigo, hablar de proyectos o simplemente saludar, pincha en los iconos o mandame un email a <span className="text-primary text-xl">nbcharro@gmail.com</span>
			</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</p>'}</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'<div>'}</p>
			<div className='flex justify-around'>
				<a href="mailto:nbcharro@gmail.com" title="Email">
					<img className="h-8" src="/images/social/email.png" alt="Icono de Email" />
				</a>
				<a href="https://github.com/NBCharro" target="_blank" title="Github">
					<img className="h-8" src="/images/social/github.png" alt="Icono de Github" />
				</a>
				<a href="https://www.linkedin.com/in/nbcharro" target="_blank" title="LinkedIn">
					<img className="h-8" src="/images/social/linkedin.png" alt="Icono de Linkedin" />
				</a>
				<a href="https://wa.me/34614243007" target="_blank" title="Whatsapp">
					<img className="h-8" src="/images/social/whatsapp.png" alt="Icono de Whatsapp" />
				</a>
				<a href="/doc/nelsonblancocharro.pdf" download title="Descargar curriculum">
					<img className="h-8 rounded-lg bg-white" src="/images/social/curriculum.png" alt="Icono del Curriculum" />
				</a>
			</div>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</div>'}</p>
		</section>
	)
}

export default Contact
