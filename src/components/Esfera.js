import { IconCloud } from 'react-icon-cloud';
import html5SVG from 'simple-icons/icons/html5';
import css3SVG from 'simple-icons/icons/css3';
import javascriptSVG from 'simple-icons/icons/javascript';
import reactSVG from 'simple-icons/icons/react';
import gitSVG from 'simple-icons/icons/git';
import githubSVG from 'simple-icons/icons/github';
import javaSVG from 'simple-icons/icons/java';
import sqlSVG from 'simple-icons/icons/mysql';
import php from 'simple-icons/icons/php';


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
		{ id: 'html5', simpleIcon: html5SVG },
		{ id: 'css3', simpleIcon: css3SVG },
		{ id: 'react', simpleIcon: reactSVG },
		{ id: 'javascript', simpleIcon: javascriptSVG },
		{ id: 'git', simpleIcon: gitSVG },
		{ id: 'github', simpleIcon: githubSVG },
		{ id: 'java', simpleIcon: javaSVG },
		{ id: 'php', simpleIcon: php },
		{ id: 'sql', simpleIcon: sqlSVG },
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
