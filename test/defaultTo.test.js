import { assert } from 'chai'
import defaultTo from '../src/defaultTo.js'

describe('Assert testing defaultTo()...', () => {
    it('returns correct value for 5', () => {
        assert.equal(defaultTo(5, 10), 5);
    });
    it('returns correct value for undefined', () => {
        assert.equal(defaultTo(undefined, 10), 10);
    });
});