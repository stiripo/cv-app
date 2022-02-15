import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGraduationCap, faUser, faPen, faGem, faSuitcase, faLocationArrow, faComment} from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
    return (
        <nav>
            <ul className='nav'>
                <li>
                    <FontAwesomeIcon className='nav-icon' icon={faUser} />
                    <a href='#'>About me</a>
                </li>
                <li>
                    <FontAwesomeIcon className='nav-icon' icon={faGraduationCap} />
                    <a href='#'>Education</a>
                </li>
                <li>
                    <FontAwesomeIcon className='nav-icon' icon={faPen} />
                    <a href='#'>Experience</a>
                </li>
                <li>
                    <FontAwesomeIcon className='nav-icon' icon={faGem} />
                    <a href='#'>Skills</a>
                </li>
                <li>
                    <FontAwesomeIcon className='nav-icon' icon={faSuitcase} />
                    <a href='#'>Portfolio</a>
                </li>
                <li>
                    <FontAwesomeIcon className='nav-icon' icon={faLocationArrow} />
                    <a href='#'>Contacts</a>
                </li>
                <li>
                    <FontAwesomeIcon className='nav-icon' icon={faComment} />
                    <a href='#'>Feedback</a>
                </li>
            </ul>
        </nav>
    )
}