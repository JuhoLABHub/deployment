import { assert } from 'chai'
import isArrayLike from '../src/isArrayLike.js'

describe('Assert testing isArrayLike()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isArrayLike([2, 4, 6]), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isArrayLike(Function), false);
    });
});