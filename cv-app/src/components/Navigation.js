import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser, faPen, faGem, faSuitcase, faLocationArrow, faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';

export function Navigation() {
    return (
        <nav>
            <ul className='nav'>
                <li>
                    <Link className='nav-link' to='About me' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className='nav-icon' icon={faUser} />
                        <div className='nav-section'>About me</div>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to='Education' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className='nav-icon' icon={faGraduationCap} />
                        <div className='nav-section'>Education</div>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to='Experience' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className='nav-icon' icon={faPen} />
                        <div className='nav-section'>Experience</div>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to='Skills' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className='nav-icon' icon={faGem} />
                        <div className='nav-section'> Skills </div>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to='Portfolio' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className='nav-icon' icon={faSuitcase} />
                        <div className='nav-section'>Portfolio</div>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to='Contacts' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className='nav-icon' icon={faLocationArrow} />
                        <div className='nav-section'>Contacts</div>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to='Feedback' spy={true} smooth={true} duration={1000}>
                        <FontAwesomeIcon className='nav-icon' icon={faComment} />
                        <div className='nav-section'>Feedback</div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}