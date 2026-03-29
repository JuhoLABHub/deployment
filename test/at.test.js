import { assert } from 'chai'
import at from '../src/at.js'
const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }

describe('Assert testing at()...', () => {
    it('adds two nu', () => {
        assert.equal(at(object, ['a[0].b.c', 'a[1]']), [3, 4]);
    });
});