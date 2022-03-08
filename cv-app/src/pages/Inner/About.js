import { Panel } from "../../components/Panel/Panel";
import { SectionContainer } from "../../components/SectionContainer/SectionContainer";
import { EducationTimeline } from "../../components/EducationTimeline/EducationTimeline";
import { Experience } from "../../components/Experience/Experience";
import { experience_data } from "../../utils/constants";
import { Contacts } from "../../components/Contacts/Contacts";
import { Feedback } from "../../components/Feedback/Feedback";
import { feedback_data } from "../../utils/constants";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import styles from './About.module.scss';
import { SkillsWrapper } from "../../components/Skills/SkillsForm";


export function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.side_menu}>
                <Panel backToRoute='/' />
            </div>
            <div className={styles.main_content}>
                <SectionContainer
                    title='About me'
                    content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque' />
                <SectionContainer title='Education' content={<EducationTimeline />} />
                <SectionContainer
                    title='Experience'
                    content={<Experience data={experience_data} />} />
                <SectionContainer title='Skills' content={<SkillsWrapper />} />
                <SectionContainer title='Portfolio' content={<Portfolio />} />
                <SectionContainer title='Contacts' content={<Contacts />} />
                <SectionContainer
                    title='Feedback'
                    content={<Feedback data={feedback_data} />} />
                <Link className={styles.back_to_top} to='About me' spy={true} smooth={true} duration={1000}>
                    {<FontAwesomeIcon icon={faChevronUp} />}
                </Link>
            </div>
        </div>
    )
}