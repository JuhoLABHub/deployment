import { assert } from 'chai'
import add from '../src/add.js'

describe('Assert testing add()...', () => {
    it('adds two numbers correctly', () => {
        assert.equal(add(2, 5), 7);
    });
});