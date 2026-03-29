import { assert } from 'chai'
import isLength from '../src/isLength.js'

describe('Assert testing isLength()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isDate(new Date), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isDate('Sun March 29 2026'), false);
    });
});