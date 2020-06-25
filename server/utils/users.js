class Users {
    constructor() {
        this.users = [];

        // this.users = [{
        //     id: '1',
        //     name: 'uchi',
        //     room: 'gekyume'
        // },{
        //     id: '2',
        //     name: 'cvam',
        //     room: 'gekyume'
        // },{
        //     id: '3',
        //     name: 'namjoon',
        //     room: 'bruh'
        // }];
    }

    addUser(id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);
        
        if(user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        
        return namesArray;
    }
}

// var me = new Users();
// me.getUser('2');

module.exports = {Users};