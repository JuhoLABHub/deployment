import { assert } from 'chai'
import isObject from '../src/isObject.js'

describe('Assert testing isObject()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isObject(Function), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isObject(null), false);
    });
});