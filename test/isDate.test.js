import { assert } from 'chai'
import isDate from '../src/isDate.js'

describe('Assert testing isDate()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isDate(new Date), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isDate('Sun March 29 2026'), false);
    });
});