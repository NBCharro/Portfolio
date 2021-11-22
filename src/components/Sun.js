import classes from './Sun.module.css';

const Sun = (props) => {
	const clicked = (e) => {
		e.preventDefault();
		if (e.target.name === 'Ecolegas') { return }
		props.clickado(props.nombre);
	};
	return (
		<>
			<div className={classes.ui} onClick={clicked}>
				<div
					className={classes.cover}
					style={{
						backgroundImage: `url(${!props.sol && props.imagen})`,
					}}
				>
					<div className={classes.Hijo}>
						{props.sol && props.children}
					</div>
				</div>
			</div>
		</>
	);
};

export default Sun;
