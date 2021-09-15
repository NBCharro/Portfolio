import React from 'react';
import allIcons from 'simple-icons';
import { IconCloud } from 'react-icon-cloud';
import classes from './Esfera.module.css';

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
    const iconos = [
        'typescript',
        'javascript',
        'react',
        'html5',
        'css3',
        'firebase',
        'git',
        'jira',
        'github',
        'visualstudiocode',
        'figma',
    ];
    const iconTags = iconos.map((icono) => ({
        id: icono,
        simpleIcon: allIcons.Get(icono),
    }));
    // const Handler = (event) => {
    //     if (event.target.attributes.title.nodeValue === '') return;
    //     console.log(event.target.attributes.title.nodeValue);
    // };
    return (
        <div className={classes.iconos}>
            <IconCloud
                id={'icon'}
                iconSize={82}
                minContrastRatio={1}
                backgroundHexColor={'#fff'}
                fallbackHexColor={'#000'}
                tagCanvasOptions={opciones}
                tags={iconTags}
            />
        </div>
    );
};

export default Esfera;
