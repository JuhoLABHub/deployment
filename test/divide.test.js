import { assert } from 'chai'
import divide from '../src/divide.js'

describe('Assert testing divide()...', () => {
    it('divides two numbers correctly', () => {
        assert.equal(divide(30, 5), 6);
    });
});