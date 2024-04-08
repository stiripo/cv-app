import { getDomainFromUrl } from "./helper _functions";
import '@testing-library/jest-dom';

describe('getDomainFromUrl function', () => {
    test('should reduce url starting with https to domain', () => {
        expect(getDomainFromUrl('https://www.example.com')).toMatch('example.com');
    });
    test('should reduce url starting with http to domain', () => {
        expect(getDomainFromUrl('http://www.website.com')).toMatch('website.com');
    })
})
