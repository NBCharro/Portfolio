import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
	return (
		<div className="h-fit bg-gray-900 text-white bg-[url('/images/backgroundStars.png')] bg-center bg-repeat bg-fixed pb-4" >
			<div class='md:w-11/12 mx-auto  min-w-[360px] max-w-[1200px]'>
				<Hero />
				<Projects />
				<Skills />
				<AboutMe />
				<Contact />
			</div>
		</div >
	)
}

export default App
