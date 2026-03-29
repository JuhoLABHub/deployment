import { assert } from 'chai'
import capitalize from '../src/capitalize.js';

describe('Assert testing capitalize()...', () => {
    it('capitalizes first letter', () => {
        assert.equal(capitalize("skibidi"), "Skibidi");
    });
});