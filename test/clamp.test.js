import { assert } from 'chai'
import clamp from '../src/clamp.js';

describe('Assert testing clamp()...', () => {
    it('clamps properly', () => {
        assert.equal(clamp(21, 0, 7), 7);
    });
});