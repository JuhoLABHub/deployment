import { assert } from 'chai'
import isBoolean from '../src/isBoolean.js'

describe('Assert testing isBoolean()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isBoolean(false), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isBoolean(0), false);
    });
});