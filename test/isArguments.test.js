import { assert } from 'chai'
import isArguments from '../src/isArguments.js'

describe('Assert testing isArguments()...', () => {
    it('returns true when appropriate', () => {
        assert.equal(isArguments(function() { return arguments }()), true);
    });
    it('returns false when appropriate', () => {
        assert.equal(isArguments('Michael Jordan'), false);
    });
});