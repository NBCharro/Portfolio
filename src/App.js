import Componente1 from './components/Componente1';
import { useState } from 'react';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Skills from './components/Skills';

function App() {
    const [clicked, setClicked] = useState(false);
    function Handler(event) {
        event.preventDefault();
        setClicked((prev) => !prev);
    }
    return (
        <>
            <Componente1 click={Handler} pulsado={clicked} />
        </>
    );
}

export default App;
