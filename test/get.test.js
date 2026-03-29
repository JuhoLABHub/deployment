import { assert } from 'chai'
import get from '../src/get.js'

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe('Assert testing get()...', () => {
    it('works properly', () => {
        assert.equal(get(object, 'a[0].b.c'), 3);
    });
});