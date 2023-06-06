

function Projects() {
	return (
		<section className="px-3 py-2 mx-auto">
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</h2>'}</p>
			<h2 className="text-primary text-2xl text-center">
				Proyectos
			</h2>
			<p className="text-gray-400 italic font-light text-xs py-0.5">{'</h2>'}</p>
			<div className="md:grid md:grid-cols-2 gap-4 md:justify-items-center md:items-center lg:grid-cols-4">
				{/* CARD 1 */}
				<div className='flex flex-col h-full'>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'<div>'}</p>
					<div className="border hover:border-primary border-gray-200 rounded-lg bg-gray-800 flex-grow flex flex-col justify-between">
						<picture>
							<img
								className="rounded-lg"
								sizes="(max-width: 1400px) 100vw, 1400px"
								srcSet="
							/images/projects/greenLifeNutrition/greenLifeNutrition_rtm0ha_c_scale,w_200.png 200w,
							/images/projects/greenLifeNutrition/greenLifeNutrition_rtm0ha_c_scale,w_669.png 669w,
							/images/projects/greenLifeNutrition/greenLifeNutrition_rtm0ha_c_scale,w_954.png 954w,
							/images/projects/greenLifeNutrition/greenLifeNutrition_rtm0ha_c_scale,w_1200.png 1200w,
							/images/projects/greenLifeNutrition/greenLifeNutrition_rtm0ha_c_scale,w_1400.png 1400w"
								src="/images/projects/greenLifeNutrition/greenLifeNutrition_rtm0ha_c_scale,w_1400.png"
								alt="Imagen de la web de nutricion con ReactJS" />
						</picture>
						<div className="px-4 mt-1">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Nutricionista React</h5>
							<p className="mb-3 font-normal text-gray-400">
								Landing page que fusiona funcionalidad y diseño, creada con ReactJS y Tailwind CSS para cautivar y sorprender a los visitantes
							</p>
						</div>
						<div className="flex flex-nowrap justify-around lg:flex-wrap pb-4 lg:pb-2">
							<a href="https://greenlifenutrition.netlify.app/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-primary text-black rounded-lg hover:bg-secondary hover:text-white border-2 border-primary hover:border-white lg:my-2">
								Visitar pagina
							</a>
							<button disabled target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 rounded-lg lg:my-2 bg-gray-700 border-2 border-gray-400">
								Enlace a Github
							</button>
						</div>
					</div>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'</div>'}</p>
				</div>
				{/* CARD 2 */}
				<div className='flex flex-col h-full'>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'<div>'}</p>
					<div className="border hover:border-primary border-gray-200 rounded-lg bg-gray-800 flex-grow flex flex-col justify-between">
						<picture>
							<img className="rounded-lg"
								sizes="(max-width: 1160px) 100vw, 1160px"
								srcSet="
                        /images/projects/ecolegas/ecolegas_weii64_c_scale,w_200.png 200w,
                        /images/projects/ecolegas/ecolegas_weii64_c_scale,w_525.png 525w,
                        /images/projects/ecolegas/ecolegas_weii64_c_scale,w_745.png 745w,
                        /images/projects/ecolegas/ecolegas_weii64_c_scale,w_909.png 909w,
                        /images/projects/ecolegas/ecolegas_weii64_c_scale,w_1160.png 1160w"
								src="/images/projects/ecolegas/ecolegas_weii64_c_scale,w_1160.png"
								alt="Imagen de la web de agricultura con ReactJS" />
						</picture>
						<div className="px-4 mt-1">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Agricultura React</h5>
							<p className="mb-3 font-normal text-gray-400">
								Proyecto utilizando Route, Hooks, props y la API EmailJS para crear una experiencia web interactiva y envolvente
							</p>
						</div>
						<div className="flex flex-nowrap justify-around lg:flex-wrap pb-4 lg:pb-2">
							<a href="https://ecolegas.netlify.app/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-primary text-black rounded-lg hover:bg-secondary hover:text-white border-2 border-primary hover:border-white lg:my-2">
								Visitar pagina
							</a>
							<a href="https://github.com/NBCharro/ecolegasProyecto" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-primary text-black rounded-lg hover:bg-secondary hover:text-white border-2 border-primary hover:border-white lg:my-2">
								Enlace a Github
							</a>
						</div>
					</div>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'<div>'}</p>
				</div>
				{/* CARD 3 */}
				<div className='flex flex-col h-full'>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'</div>'}</p>
					<div className="border hover:border-primary border-gray-200 rounded-lg bg-gray-800 flex-grow flex flex-col justify-between">
						<picture>
							<img className="rounded-lg"
								sizes="(max-width: 1024px) 100vw, 1024px"
								srcSet="
                            /images/projects/barberia/barberiaLaravel_oakahp_c_scale,w_200.png 200w,
                            /images/projects/barberia/barberiaLaravel_oakahp_c_scale,w_533.png 533w,
                            /images/projects/barberia/barberiaLaravel_oakahp_c_scale,w_758.png 758w,
                            /images/projects/barberia/barberiaLaravel_oakahp_c_scale,w_894.png 894w,
                            /images/projects/barberia/barberiaLaravel_oakahp_c_scale,w_1024.png 1024w"
								src="/images/projects/barberia/barberiaLaravel_oakahp_c_scale,w_1024.png"
								alt="Imagen de la web de la barberia hecha en Laravel" />
						</picture>
						<div className="px-4 mt-1">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Barberia Laravel</h5>
							<p className="mb-3 font-normal text-gray-400">
								Utiliza la potencia de Laravel para crear una página web de una barbería, mientras que Bootstrap 5 asegura un diseño moderno y responsive
							</p>
						</div>
						<div className="flex flex-nowrap justify-around lg:flex-wrap pb-4 lg:pb-2">
							<button href="https://www.barberialaravel.ovh/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-primary text-black rounded-lg hover:bg-secondary hover:text-white border-2 border-primary hover:border-white lg:my-2">
								Visitar pagina
							</button>
							<a href="https://github.com/NBCharro/barberiaLaravel" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-primary text-black rounded-lg hover:bg-secondary hover:text-white border-2 border-primary hover:border-white lg:my-2">
								Enlace a Github
							</a>
						</div>
					</div>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'</div>'}</p>
				</div>
				{/* CARD 4 */}
				<div className='flex flex-col h-full'>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'<div>'}</p>
					<div className="border hover:border-primary border-gray-200 rounded-lg bg-gray-800 flex-grow flex flex-col justify-between">
						<picture>
							<img className="rounded-lg"
								sizes="(max-width: 1400px) 100vw, 1400px"
								srcSet="
                            /images/projects/api/api_nfdtl4_c_scale,w_200.png 200w,
                            /images/projects/api/api_nfdtl4_c_scale,w_889.png 889w,
                            /images/projects/api/api_nfdtl4_c_scale,w_1311.png 1311w,
                            /images/projects/api/api_nfdtl4_c_scale,w_1400.png 1400w"
								src="/images/projects/api/api_nfdtl4_c_scale,w_1400.png"
								alt="Website de la API de alimentos" />
						</picture>
						<div className="px-4 mt-1">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">API de alimentos</h5>
							<p className="mb-3 font-normal text-gray-400">
								Desarrollada en Typescript y documentada utilizando Swagger para una fácil comprensión e integración con otras aplicaciones
							</p>
						</div>
						<div className="flex flex-nowrap justify-around lg:flex-wrap pb-4 lg:pb-2">
							<a href="https://api-nutricion.onrender.com/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-primary text-black rounded-lg hover:bg-secondary hover:text-white border-2 border-primary hover:border-white lg:my-2">
								Visitar pagina
							</a>
							<a href="https://github.com/NBCharro/apiNutricion" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-primary text-black rounded-lg hover:bg-secondary hover:text-white border-2 border-primary hover:border-white lg:my-2">
								Enlace a Github
							</a>
						</div>
					</div>
					<p className="text-gray-400 italic font-light text-xs py-0.5">{'</div>'}</p>
				</div>
			</div>
		</section>
	)
}

export default Projects