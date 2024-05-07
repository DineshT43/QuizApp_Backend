const { v4 : uuid } = require("uuid");

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "krishna",
            password: "krsna12345",
            emailId: "krsna@gmail.com",
        },
        {
            id: uuid(),
            username: "sundar",
            password: "sndr12345",
            emailId: "sndr@gmail.com",
        },
        {
            id: uuid(),
            username: "dinesh",
            password: "dsh12345",
            emailId: "dsh@gmail.com",
        },
    ]
}

module.exports = userdata;