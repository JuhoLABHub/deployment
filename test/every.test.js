import { assert } from 'chai'
import every from '../src/every.js'

describe('Assert testing compact()...', () => {
    it('should return false', () => {
        assert.equal(every([true, 1, null, 'yes'], Boolean), false);
    });
});