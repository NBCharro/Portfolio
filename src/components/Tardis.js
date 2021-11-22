import React from 'react';
import { motion } from 'framer-motion';
import classes from './Tardis.module.css';

const Tardis = () => {
	const containerVariants = {
		from: {
			y: '250%',
			x: '-500%',
			scale: 0.25,
		},
		to: {
			y: ['250%', '-250%', '350%', '-300%', '250%'],
			x: ['-500%', '500%', '150%', '-250%', '-250%'],
			rotate: [0, 30, 0, -45, 0],
			scale: [0.25, 0.15, 0.2, 0.15, 0.25],
			transition: { repeat: Infinity, duration: 30 },
		},
		phone: {
			y: ['250%', '-150%', '150%', '-95%', '-95%'],
			x: ['-500%', '250%', '0%', '-250%', '250%'],
			rotate: [0, 30, 0, -45, 0],
			scale: [0.25, 0.15, 0.2, 0.15, 0.25],
			transition: { repeat: Infinity, duration: 30 },
		},
	};
	return (
		<motion.div
			className={classes.nave}
			variants={containerVariants}
			initial="from"
			animate={window.screen.availWidth > 640 ? 'to' : 'phone'}
		></motion.div>
	);
};

export default Tardis;
