import { Navigation } from "../Navigation/Navigation";
import { PhotoBox } from "../PhotoBox/PhotoBox";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from './Panel.module.scss';


export function Panel(props) {
    return (
        <div className={styles.panel}>
            <div className={styles.hamburger_menu}>
                {<FontAwesomeIcon icon={faBars} />}
            </div>

            <div>
                {<PhotoBox size='small' name="John Doe" avatar="http://avatars0.githubusercontent.com/u/246180?v=4" />}
            </div>
            <div>
                {<Navigation />}
            </div>
            <div className={styles.empty}></div>
            <div>
                <Link to={props.backToRoute}><Button icon={<FontAwesomeIcon icon={faChevronLeft} />} className={styles.button}  text="Go back" /></Link>
            </div>
        </div>
    )
}