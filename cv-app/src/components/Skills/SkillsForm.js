import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './SkillsForm.module.scss';
import { addSkill, postSkillsData } from '../../features/skills/skillsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { validate } from '../../services/validation';
import { Button } from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';

export function SkillsForm() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            skillName: '',
            skillRange: ''
        },
        validate,
        onSubmit: (values, action) => {
            dispatch(addSkill({
                name: values.skillName,
                range: values.skillRange,
            }));
            dispatch(postSkillsData(JSON.stringify(
                {
                    name: values.skillName,
                    range: values.skillRange,
                }
            )));
            formik.resetForm()
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
                onBlur={formik.handleBlur}
                value={formik.values.skillName}
                className={formik.touched.skillName && formik.errors.skillName ? styles.invalid : ''}
            />
            {formik.errors.skillName ? <div className={styles.skill_error}>{formik.errors.skillName}</div> : null}
            <label htmlFor='skillRange'>Skill range:</label>
            <input
                id='skillRange'
                name='skillRange'
                type='number'
                placeholder='Enter skill range'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.skillRange}
                className={formik.touched.skillRange && formik.errors.skillRange ? styles.invalid : ''}
            />
            {formik.errors.skillRange ? <div className={styles.range_error}>{formik.errors.skillRange}</div> : null}

            <Button text='Add skill' disabled={Object.keys(formik.errors).length} className={styles.submit_btn} />
            {/* <button type='sumbit' disabled={Object.keys(formik.errors).length} className={styles.submit_btn}>Add skill</button> */}
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
            <Button icon={<FontAwesomeIcon icon={faPenSquare} />} text='Open edit' className={styles.open_edit} onClick={openEdit} />
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
