import Sun from './Sun';
import Ecolegas from './projects/Ecolegas';
import CoomingSoon from './projects/CoomingSoon';
import SolFoto from '../resources/sun1.png';
import SolFoto2 from '../resources/sun2.png';
import SolFoto4 from '../resources/sun4.png';
import SolFoto5 from '../resources/sun5.png';
import classes from './Projects.module.css';

const Projects = () => {
    return (
        <>
            <div className={classes.contenedorSoles}>
                <div className={classes.sol0}>
                    <Sun imagen={SolFoto}>
                        <CoomingSoon />
                    </Sun>
                </div>
                <div className={classes.sol1}>
                    <Sun imagen={SolFoto5}>
                        <CoomingSoon />
                    </Sun>
                </div>
                <div className={classes.sol2}>
                    <Sun imagen={SolFoto2}>
                        <Ecolegas />
                    </Sun>
                </div>
                <div className={classes.sol3}>
                    <Sun imagen={SolFoto4}>
                        <CoomingSoon />
                    </Sun>
                </div>
            </div>
        </>
    );
};

export default Projects;
