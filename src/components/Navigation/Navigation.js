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
                        <p className={styles.nav_section}>About me</p>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Education' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faGraduationCap} />
                        <p className={styles.nav_section}>Education</p>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Experience' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faPen} />
                        <p className={styles.nav_section}>Experience</p>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Skills' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faGem} />
                        <p className={styles.nav_section}> Skills </p>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Portfolio' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faSuitcase} />
                        <p className={styles.nav_section}>Portfolio</p>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Contacts' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faLocationArrow} />
                        <p className={styles.nav_section}>Contacts</p>
                    </Link>
                </li>
                <li>
                    <Link className={styles.nav_link} to='Feedback' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className={styles.nav_icon} icon={faComment} />
                        <p className={styles.nav_section}>Feedback</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}