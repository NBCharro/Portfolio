import { IconCloud } from 'react-icon-cloud';
import typescriptSVG from 'simple-icons/icons/typescript';
import javascriptSVG from 'simple-icons/icons/javascript';
import css3SVG from 'simple-icons/icons/css3';
import reactSVG from 'simple-icons/icons/react';
import html5SVG from 'simple-icons/icons/html5';
import firebaseSVG from 'simple-icons/icons/firebase';
import gitSVG from 'simple-icons/icons/git';
import jiraSVG from 'simple-icons/icons/jira';
import githubSVG from 'simple-icons/icons/github';
import visualstudiocodeSVG from 'simple-icons/icons/visualstudiocode';
import figmaSVG from 'simple-icons/icons/figma';
import javaSVG from 'simple-icons/icons/java';
import './Esfera.module.css';

const Esfera = () => {
    const opciones = {
        // TagCanvas options:
        // activeCursor: "pointer",
        clickToFront: 500,
        dragControl: true,
        // freezeActive: true,
        // freezeDecel: true,
        initial: [-0.3, -0.8],
        maxSpeed: 0.005,
        outlineColour: '#0000',
        // outlineRadius: 50,
        // pinchZoom: true,
        reverse: true,
        // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring',
        tooltip: 'native',
        tooltipDelay: 0,
        wheelZoom: false,
    };
    const iconTags = [
        { id: 'typescript', simpleIcon: typescriptSVG },
        { id: 'javascript', simpleIcon: javascriptSVG },
        { id: 'css3', simpleIcon: css3SVG },
        { id: 'react', simpleIcon: reactSVG },
        { id: 'html5', simpleIcon: html5SVG },
        { id: 'firebase', simpleIcon: firebaseSVG },
        { id: 'git', simpleIcon: gitSVG },
        { id: 'jira', simpleIcon: jiraSVG },
        { id: 'github', simpleIcon: githubSVG },
        { id: 'visualstudiocode', simpleIcon: visualstudiocodeSVG },
        { id: 'figma', simpleIcon: figmaSVG },
        { id: 'java', simpleIcon: javaSVG },
    ];
    return (
        <IconCloud
            id={'icon'}
            iconSize={82}
            minContrastRatio={1}
            backgroundHexColor={'#fff'}
            fallbackHexColor={'#000'}
            tagCanvasOptions={opciones}
            tags={iconTags}
        />
    );
};

export default Esfera;
