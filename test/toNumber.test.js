import { assert } from 'chai'
import toNumber from '../src/toNumber.js';

describe('Assert testing toNumber()...', () => {
    it('returns number', () => {
        assert.equal(toNumber(67), 67);
    });
    it('returns MIN_VALUE', () => {
        assert.equal(toNumber(Number.MIN_VALUE), 5e-324);
    });
});