import { assert } from 'chai'
import toString from '../src/toString.js';

describe('Assert testing toString()...', () => {
    it('returns string', () => {
        assert.equal(toString(67), '67');
    });

});