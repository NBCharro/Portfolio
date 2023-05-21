function Hero() {
	return (
		<section class="px-3 pb-2 pt-5 mx-auto">
			<div class='flex justify-between'>
				<img class="h-6 animate-spin-slow" src="/images/nbcharroLogo.svg" alt="Icono de Java" />
				<h2 className="text-primary font-handwriting text-xl text-right">
					NBCharro
				</h2>
			</div>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'<p>'}</p>
			<p class='text-parrafo'>
				Hola, mi nombre es
			</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</p>'}</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'<h1>'}</p>
			<h1 className="text-primary font-handwriting text-3xl md:text-5xl maquina-escribir">
				Nelson Blanco Charro
			</h1>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</h1>'}</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'<p>'}</p>
			<p class='text-parrafo'>
				Soy desarrollador de software
			</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</p>'}</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'<p>'}</p>
			<p class='text-parrafo'>
				Siempre en busca de soluciones tecnológicas eficientes y efectivas, ¡como un detective persiguiendo pistas en el mundo digital!
			</p>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</p>'}</p>
			<svg class="w-6 h-6 mx-auto animate-bounce text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
			</svg>
		</section >
	)
}
export default Hero