import linkedIn from '../resources/linkedin.svg';
import classes from './Social.module.css';

const Social = () => {
    return (
        <div className={classes.social}>
            <a
                href="https://twitter.com/nbcharro"
                target="_blank"
                rel="noreferrer"
                title="Link to author's Twitter profile"
            >
                <img
                    src="https://openmoji.org/data/color/svg/E040.svg"
                    alt="twitter"
                />
            </a>
            <a
                id="profile-link"
                href="https://github.com/nbcharro"
                target="_blank"
                rel="noreferrer"
                title="Link to author's GitHub Profile"
            >
                <img
                    src="https://openmoji.org/data/color/svg/E045.svg"
                    alt="GitHub"
                />
            </a>
            <a
                href="https://codepen.io/nbcharro"
                target="_blank"
                rel="noreferrer"
                title="Link to author's Codepen Profile"
            >
                <img
                    src="https://openmoji.org/data/color/svg/E046.svg"
                    alt="LinkedIn"
                />
            </a>
            <a
                href="https://codepen.io/nbcharro"
                target="_blank"
                rel="noreferrer"
                title="Link to author's Codepen Profile"
            >
                <img src={linkedIn} alt="LinkedIn" />
            </a>
        </div>
    );
};
export default Social;
