import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './SkillsForm.module.scss';
import { addSkill, postSkillsData } from '../../features/skills/skillsSlice';
import { useDispatch, useSelector } from 'react-redux';


export function SkillsForm() {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            skillName: '',
            skillRange: ''
        },
        onSubmit: values => {
            dispatch(addSkill({
                name: values.skillName,
                range: values.skillRange,
            }));
            // dispatch(postSkillsData(JSON.stringify(
            //     {
            //         name: values.skillName,
            //         range: values.skillRange,
            //     }
            // )))
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <label htmlFor='skillName'>Skill name:</label>
            <input
                id='skillName'
                name='skillName'
                type='text'
                placeholder='Enter skill name'
                onChange={formik.handleChange}
                value={formik.values.skillName}
            />
            <label htmlFor='skillRange'>Skill range:</label>
            <input
                id='skillRange'
                name='skillRange'
                type='number'
                placeholder='Enter skill range'
                onChange={formik.handleChange}
                value={formik.values.skillRange}
            />

            <button type='sumbit'>Add skill</button>
        </form>
    )
}

export function SkillsChart() {
    const skills = useSelector(state => state.skills);

    if (skills.length > 0) {
        const chart = skills.map((skill) =>
            <div key={skill.name} className={styles.chart} style={{ maxWidth: `${skill.range}%` }}>{skill.name}</div>
        );
        return (
            <div>{chart}</div>
        )
    }
    return (
        <div></div>
    )
}

export function SkillsWrapper() {
    const [hidden, setHidden] = useState(true);
    const openEdit = () => setHidden(false);

    return (
        <div className={styles.wrapper}>
            <button className={styles.open_edit} onClick={openEdit}>Open edit</button>
            <div className={hidden ? styles.hidden : styles.frame}>
                <SkillsForm />
            </div>
            <SkillsChart />
            <div className={styles.scale}>
                <div className={styles.beginner}>Beginner</div>
                <div className={styles.profficient}>Profficient</div>
                <div className={styles.expert}>Expert</div>
                <div className={styles.master}>Master</div>
            </div>
        </div>
    )
}
