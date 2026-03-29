import { assert } from 'chai'
import slice from '../src/slice.js'

var array = [1, 2, 3, 4]

describe('Assert testing slice()...', () => {
    it('works properly', () => {
        assert.equal(slice(array, 2), [3, 4]);
    });
});