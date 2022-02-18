import styles from './Portfolio.module.scss';
import overlay_styles from '../PortfolioInfo/PortfolioInfo.module.scss';
import { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import { PortfolioInfo } from '../PortfolioInfo/PortfolioInfo';
import card_1 from '../../assets/images/card_1.png';
import card_3 from '../../assets/images/card_3.png';

export function Portfolio() {

    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        setIsotope(
            new Isotope(`.${styles.filter_container}`, {
                itemSelector: `.${styles.filter_item}`,
                layoutMode: 'fitRows',
            })
        )
    }, []);

    useEffect(() => {
        if (isotope) {
            filterKey === '*' ? isotope.arrange({ filter: `*` }) : isotope.arrange({ filter: `.${filterKey}` })
        }
    }, [isotope, filterKey]);

    return (
        <>
            <ul className={styles.tabs}>
                <li onClick={() => setFilterKey('*')}>
                    <span className={filterKey === '*' ? styles.active : undefined}>All</span>
                </li>
                <li onClick={() => setFilterKey('ui')}>
                    <span className={filterKey === 'ui' ? styles.active : undefined} >Ui</span>
                </li>
                <li onClick={() => setFilterKey('code')}>
                    <span className={filterKey === 'code' ? styles.active : undefined}>Code</span>
                </li>
            </ul>
            <ul className={styles.filter_container}>
                <li className={`${styles.filter_item} ui`}>
                    <img height='190px' width='300px' src={card_1} alt='card' />
                    <div className={styles.overlay}>
                        <PortfolioInfo
                            title='Some title'
                            text='Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis'
                            source='www.somesite.com' />
                    </div>
                </li>
                <li className={`${styles.filter_item} code`}>
                    <img height='190px' width='300px' src={card_3} alt='card' />
                    <div className={styles.overlay}>
                        <PortfolioInfo
                            title='Some title'
                            text='Some text'
                            source='www.somesite.com' />
                    </div>
                </li>
                <li className={`${styles.filter_item} code`}>
                    <img height='190px' width='300px' src={card_3} alt='card' />
                    <div className={styles.overlay}>
                        <PortfolioInfo
                            title='Some title'
                            text='Some text'
                            source='www.somesite.com' />
                    </div>
                </li>
                <li className={`${styles.filter_item} ui`}>
                    <img height='190px' width='300px' src={card_1} alt='card' />
                    <div className={styles.overlay}>
                        <PortfolioInfo
                            title='Some title'
                            text='Some text'
                            source='www.somesite.com' />
                    </div>
                </li>
            </ul>
        </>
    )
}