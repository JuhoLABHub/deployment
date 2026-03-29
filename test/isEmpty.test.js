import { assert } from 'chai'
import isEmpty from '../src/isEmpty.js'

describe('Assert testing isEmpty()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isEmpty(null), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isEmpty('Acer'), false);
    });
});