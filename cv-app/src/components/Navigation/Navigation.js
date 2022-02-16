import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser, faPen, faGem, faSuitcase, faLocationArrow, faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import styles from './Navigation.module.scss';

export function Navigation() {
    return (
        <nav>
            <ul className={styles.nav}>
                <li>
                    <Link className={styles.nav_link} to='About me' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faUser} />
                        <div className={styles.nav_section}>About me</div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Education' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faGraduationCap} />
                        <div className={styles.nav_section}>Education</div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Experience' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faPen} />
                        <div className={styles.nav_section}>Experience</div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Skills' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faGem} />
                        <div className={styles.nav_section}> Skills </div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Portfolio' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faSuitcase} />
                        <div className={styles.nav_section}>Portfolio</div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Contacts' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faLocationArrow} />
                        <div className={styles.nav_section}>Contacts</div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Feedback' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faComment} />
                        <div className={styles.nav_section}>Feedback</div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}