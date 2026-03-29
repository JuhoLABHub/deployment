import { assert } from 'chai'
import upperFirst from '../src/upperFirst.js'

describe('Assert testing upperFirst()...', () => {
    it('capitalizes first letter', () => {
        assert.equal(upperFirst("turisti"), "Turisti");
    });
});