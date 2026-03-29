import { assert } from 'chai'
import toFinite from '../src/toFinite.js'

describe('Assert testing toFinite()...', () => {
    it('returns finite value', () => {
        assert.equal(toFinite(Infinity), 1.7976931348623157e+308);
    });
});