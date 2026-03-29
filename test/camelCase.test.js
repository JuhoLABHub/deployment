import { assert } from 'chai'
import camelCase from '../src/camelCase.js';

describe('Assert testing camelCase()...', () => {
    it('applies correct case', () => {
        assert.equal(camelCase("Jonah Hill"), "jonahHill");
    });
});