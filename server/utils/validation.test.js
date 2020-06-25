var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var name = 123;
        var res = isRealString(name);

        expect(res).toBe(false);
    });

    it('it should reject string with only spaces', () => {
        var name = '   ';
        var res = isRealString(name);

        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var name = '  u c h i  ';
        var res = isRealString(name);

        expect(res).toBe(true);
    });
});