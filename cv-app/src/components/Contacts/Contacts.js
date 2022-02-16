import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons';
import styles from './Contacts.module.scss';

export function Contacts() {
    return (
        <address className={styles.contact_details}>
            <ul>
                <li>
                    <div className={styles.icon}><FontAwesomeIcon icon={faPhone} /></div>
                    <div>
                        <strong>
                            <a href='tel:500 342 242'>500 342 242</a>
                        </strong>
                    </div>
                </li>

                <li>
                    <div className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></div>
                    <div>
                        <strong>
                            <a href='mailto: office@kamsolutions.pl'>office@kamsolutions.pl</a>
                        </strong>
                    </div>
                </li>

                <li>
                    <div className={styles.icon}><FontAwesomeIcon icon={faTwitter} /></div>
                    <div>
                        <strong>Twitter</strong><br />
                        <a href='https://twitter.com/wordpress'>https://twitter.com/wordpress</a>
                    </div>
                </li>

                <li>
                    <div className={styles.icon}><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div>
                        <strong>Facebook</strong><br />
                        <a href='https://www.facebook.com/facebook'>https://www.facebook.com/facebook</a>
                    </div>
                </li>

                <li>
                    <div className={styles.icon}><FontAwesomeIcon icon={faSkype} /></div>
                    <div>
                        <strong>Skype</strong><br />
                        <a href='skype:kamsolutions.pl?call'>kamsolutions.pl</a>
                    </div>
                </li>
            </ul>
        </address>
    )
}