import { assert } from 'chai'
import toInteger from '../src/toInteger.js';

describe('Assert testing toInteger()...', () => {
    it('returns integer', () => {
        assert.equal(toInteger(6.1), 6);
    });

});