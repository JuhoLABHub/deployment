import { assert } from 'chai'
import isObjectLike from '../src/isObjectLike.js'

describe('Assert testing isObjectLike()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isObjectLike([1, 2, 3]), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isObjectLike(null), false);
    });
});