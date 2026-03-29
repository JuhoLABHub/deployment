import { assert } from 'chai'
import defaultToAny from '../src/defaultToAny.js'

describe('Assert testing defaultToAny()...', () => {
    it('returns correct value', () => {
        assert.equal(defaultToAny(null, undefined, 10), 10);
    });
});