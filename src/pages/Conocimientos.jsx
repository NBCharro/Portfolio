import './conocimientos.css'

function Conocimientos() {
	return (
		<div id='conocimientos'>
			<p className='estiloTag'>{'<h3>'}</p>
			<h3>Conocimientos</h3>
			<p className='estiloTag'>{'</h3>'}</p>
			<p className='estiloTag'>{'<ul>'}</p>
			<ul id='listaIconos'>
				<li title='HTML5'></li>
				<li title='CSS3'></li>
				<li title='JavaScript'></li>
				<li title='ReactJS'></li>
				<li title='Git'></li>
				<li title='GitHub'></li>
				<li title='Java'></li>
				<li title='PHP'></li>
				<li title='MySQL'></li>
				<li title='MongoDB'></li>
			</ul>
			<p className='estiloTag'>{'</ul>'}</p>
		</div>
	)
}

export default Conocimientos