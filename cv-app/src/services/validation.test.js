import '@testing-library/jest-dom';
import { validate } from './validation';

describe('validation function', () => {
    test('should show two errors for two empty fields', () => {
        const values = {};
        const errors = {
            skillName: 'Skill name is a required field',
            skillRange: 'Skill range is a required field'
        }
        expect(validate(values)).toEqual(errors);
    });

    test('should show an error for skillRange 5', () => {
        const values = {
            skillName: 'skill',
            skillRange: 5
        };
        const errors = {
            skillRange: 'Skill range must be greater than or equal to 10'
        }
        expect(validate(values)).toEqual(errors);
    });

    test('should show an error for skillRange 200', () => {
        const values = {
            skillName: 'skill',
            skillRange: 200
        };
        const errors = {
            skillRange: 'Skill range must be less than or equal to 100'
        }
        expect(validate(values)).toEqual(errors);
    });

    test('should show an error for skillRange "master"', () => {
        const values = {
            skillName: 'skill',
            skillRange: 'master'
        };
        const errors = {
            skillRange: 'Skill range must be a "number" type'
        }
        expect(validate(values)).toEqual(errors);
    });

    test('should show no errors for skillName "CSS" skillRange 50', () => {
        const values = {
            skillName: 'CSS',
            skillRange: '50'
        };
        const errors = {}
        expect(validate(values)).toEqual(errors);
    })
})