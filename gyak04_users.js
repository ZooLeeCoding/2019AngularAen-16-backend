module.exports = {

    users: {
        "pista": "12345",
        "ocean": "man",
        "alma": "gomba",
        "pelda": "peter"
    },

    setUser: function (username, password) {
        if (!this.users[username]) {
            this.users[username] = password;
            return username;
        } return null;
    },

    getUser: function(username) {
        return this.users[username];
    },

    getUsers: function() {
        return this.users;
    }
}

//hasznalat pl. tomb["pista"]