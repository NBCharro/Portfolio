import './proyectos.css'

function Proyectos() {
	return (
		<div id='proyectos'>
			<p className='estiloTag'>{'<h3>'}</p>
			<h3>Proyectos</h3>
			<p className='estiloTag'>{'</h3>'}</p>
			<p className='estiloTag'>{'<div>'}</p>
			<div className="tarjetas">
				<div className="tarjetaIndividual">
					<div className="contenido">
						<h2 className="titulo">Frontend website de empresa agricola</h2>
						<p className="texto">Se ha usado Route, Hooks, modales, props y la API EmailJS para simular una Newsletter que se envía automáticamente al email introducido.</p>
						<a href="https://ecolegas.netlify.app/" target="_blank">
							<button className="botonEnlace">
								Ir a la página
							</button>
						</a>
					</div>
				</div>
				<div className="tarjetaIndividual">
					<div className="contenido">
						<h2 className="titulo">Backend website de control de stock</h2>
						<p className="texto">Basada en HTML, CSS y JS. Se trata de una página de control de stock de una tienda de apicultura usando PHP y MySQL.</p>
						<a href="http://beenvironment.atwebpages.com/" target="_blank">
							<button className="botonEnlace">
								Ir a la página
							</button>
						</a>
					</div>
				</div>
				<div className="tarjetaIndividual">
					<div className="contenido">
						<h2 className="titulo">Barberia Laravel</h2>
						<p className="texto">Simulación de una barbería con reserva de citas, login y posibilidad de realizar compras de productos.</p>
						<a href="https://github.com/NBCharro/barberiaLaravel" target="_blank">
							<button className="botonEnlace">
								Ir a la página
							</button>
						</a>
					</div>
				</div>
				<div className="tarjetaIndividual">
					<div className="contenido">
						<h2 className="titulo">Website en construcción</h2>
						<p className="texto">Website en construcción</p>
						<a href="#">
							<button className="botonEnlace" disabled>
								Ir a la página
							</button>
						</a>
					</div>
				</div>
			</div>
			<p className='estiloTag'>{'</div>'}</p>
		</div>
	)
}

export default Proyectos