import { assert } from 'chai'
import ceil from '../src/ceil.js';

describe('Assert testing ceil()...', () => {
    it('rounds to 1 digit correctly', () => {
        assert.equal(ceil(5.001), 6);
    });
    it('rounds to 2 digits correctly', () => {
        assert.equal(ceil(2.125, 2), 2.13);
    });
});