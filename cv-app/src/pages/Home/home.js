import { PhotoBox } from "../../components/PhotoBox";
import { Button } from "../../components/Button";
import '../../App.scss';
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className='home-page'>
            <div className='home-center-block'>
                <PhotoBox name="John Doe" title="Programmer. Creative. Innovator" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque" avatar="http://avatars0.githubusercontent.com/u/246180?v=4" />
                <Link to='/about'><Button text='Learn more' /></Link>
            </div>
        </div>

    )
}