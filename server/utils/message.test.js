const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'farzan', text='hello';
        var res = generateMessage(from, text);

        // expect is now owned by Jest, They changed toInclude -> toMatchObject
        expect(res).toMatchObject({from, text});
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate corrent location object', () => {
        var from = 'Uchi', lat = 10, lon = 15, url = `https://www.google.com/maps?q=${lat},${lon}`;
        var res = generateLocationMessage(from, lat, lon);
        
        // expect is now owned by Jest, They changed toInclude -> toMatchObject
        expect(res).toMatchObject({from, url});
        expect(typeof res.createdAt).toBe('number');
    });
});