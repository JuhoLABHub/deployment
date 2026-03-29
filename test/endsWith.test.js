import { assert } from 'chai'
import endsWith from '../src/endsWith.js';

describe('Assert testing endsWith()...', () => {
    it('checks for true', () => {
        assert.equal(endsWith("juho"), "o");
    });
    it('checks for false', () => {
        assert.equal(endsWith("juho"), "a");
    });
});