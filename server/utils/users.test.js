const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'farzan',
            room: 'gekyume'
        },{
            id: '2',
            name: 'cvam',
            room: 'gekyume'
        },{
            id: '3',
            name: 'namjoon',
            room: 'bruh'
        }];
    });

    it('should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name:'uchiha',
            room:'gekyume'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');

        expect(user.id).toBe('1');
    });

    it('should not remove a user', () => {
        var user = users.removeUser('69');

        expect(user).toBeFalsy();
    });

    it('should find a user', () => {
        var user = users.getUser('1');
        
        expect(user.id).toBe('1');
    });

    it('should not find a user', () => {
        var user = users.getUser('69');

        // expect is now owned by Jest, They changed toNotExist -> toBeFalsy
        expect(user).toBeFalsy();    
    });

    it('should return names for gekyume', () => {
        var userList = users.getUserList('gekyume');

        expect(userList).toEqual(['farzan', 'cvam']);
    });

    it('should return names for bruh', () => {
        var userList = users.getUserList('bruh');

        expect(userList).toEqual(['namjoon']);
    });
});