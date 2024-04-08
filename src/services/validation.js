export  const validate = values => {
    const errors = {};

    if (!values.skillName) {
        errors.skillName = 'Skill name is a required field';
    }
    if (!values.skillRange) {
        errors.skillRange ='Skill range is a required field';
    } else if (isNaN(values.skillRange)) {
        errors.skillRange = 'Skill range must be a "number" type';
    }
    else if (parseInt(values.skillRange) < 10) {
        errors.skillRange = 'Skill range must be greater than or equal to 10';
    } else if (parseInt(values.skillRange) > 100)
        errors.skillRange = 'Skill range must be less than or equal to 100';
    return errors;
};