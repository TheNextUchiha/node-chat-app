const expect = require('expect');

const {generateMessage} = require('./message');

describe('generatMessage', () => {
    it('should generate correct message object', () => {
        var from = 'farzan', text='hello';
        
        var res = generateMessage(from, text);

        expect(res).toMatchObject({from, text});
        expect(typeof res.createdAt).toBe('number');
    });
});