import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Componente = () => {
    const [clicky, setClicky] = useState(false);
    const styleSpring = useSpring({
        x: clicky ? '0px' : '1px',
        opacity: clicky ? '1' : '0',
    });
    function clickHandler() {
        setClicky(v => !v);
    }
    return (
        <div>
            <button onClick={clickHandler}>Clicky me!</button>
            <animated.p style={styleSpring}>Prueba con Springs</animated.p>
        </div>
    );
};

export default Componente;
