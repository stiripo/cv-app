import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faSkype } from '@fortawesome/free-brands-svg-icons';
import styles from './Address.module.scss';

export function Address() {
    return (
        <address className={styles.contact_details}>
            <dl>
                <dt><FontAwesomeIcon icon={faPhone} /></dt>
                <dd>
                    <strong>
                        <a href='tel:500 342 242'>500 342 242</a>
                    </strong>
                </dd>
            </dl>
            <dl>
                <dt><FontAwesomeIcon icon={faEnvelope} /></dt>
                <dd>
                    <strong>
                        <a href='mailto: office@kamsolutions.pl'>office@kamsolutions.pl</a>
                    </strong>
                </dd>
            </dl>
            <dl>
                <dt><FontAwesomeIcon icon={faTwitter} /></dt>
                <dd>
                    <strong>Twitter</strong><br />
                    <a href='https://twitter.com/wordpress'>https://twitter.com/wordpress</a>
                </dd>
            </dl>
            <dl>
                <dt><FontAwesomeIcon icon={faFacebookF} /></dt>
                <dd>
                    <strong>Facebook</strong><br />
                    <a href='https://www.facebook.com/facebook'>https://www.facebook.com/facebook</a>
                </dd>
            </dl>
            <dl>
                <dt><FontAwesomeIcon icon={faSkype} /></dt>
                <dd>
                    <strong>Skype</strong><br />
                    <a href='skype:kamsolutions.pl?call'>kamsolutions.pl</a>
                </dd>
            </dl>
        </address>
    )
}