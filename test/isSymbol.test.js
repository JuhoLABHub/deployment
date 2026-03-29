import { assert } from 'chai'
import isSymbol from '../src/isSymbol.js'

describe('Assert testing isSymbol()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isSymbol(Symbol.iterator), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isSymbol('abc'), false);
    });
});