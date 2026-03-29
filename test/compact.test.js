import { assert } from 'chai'
import compact from '../src/compact.js'

describe('Assert testing compact()...', () => {
    it('compacts properly', () => {
        assert.equal(compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
    });
});