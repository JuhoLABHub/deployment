import { assert } from 'chai'
import isLength from '../src/isLength.js'

describe('Assert testing isLength()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isLength(2), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isLength('Victor Wembanyama'), false);
    });
});