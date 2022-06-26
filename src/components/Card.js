import React from "react";
import classes from './Card.module.css';

export default function Card(props) {
	const goToUrl = () => {
		if (props.website !== "") {
			window.open(
				props.website,
				'_blank'
			);
		}
	}
	return (
		<div
			style={{
				backgroundImage: `url(${props.imagen})`
			}}
			className={classes.card}
			onClick={goToUrl}
		>
			<div className={classes.cardInfo}>
				<p className={classes.estiloTag}>{'<h4>'}</p>
				<h4 className={classes.cardTitle}>{props.title}</h4>
				<p className={classes.estiloTag}>{'</h4>'}</p>
				<p className={classes.estiloTag}>{'<p>'}</p>
				<p className={classes.cardDescription}>{props.description}</p>
				<p className={classes.estiloTag}>{'</p>'}</p>
				<div className={classes.cardWaves} />
			</div>
		</div>
	);
}