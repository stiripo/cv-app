import { PhotoBox } from "../../components/PhotoBox/PhotoBox";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import '../../App.scss';
import styles from './home.module.scss';

export function Home() {
    return (
        <div className={styles.home_page}>
            <div className={styles.center_block}>
                <PhotoBox
                    size='163'
                    name="John Doe"
                    title="Programmer. Creative. Innovator"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
                    avatar="http://avatars0.githubusercontent.com/u/246180?v=4" />
                <Link to='/about'><Button text='Learn more' /></Link>
            </div>
        </div>
    )
}