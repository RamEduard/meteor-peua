(() => {
    // if there is some user return
    if (Users.find().count() > 0) return;

    var users = [
        {
            "_id": "rTimnshfGRyZG9Zgo",
            "createdAt": new Date(),
            "services": {
                "password": {
                    "bcrypt": "$2a$10$DlO8AQ8yw8Li1OPK9a8vZe7aVjUejVNHPpO/Ht271BWJuxZla/ATy"
                },
                "resume": {
                    "loginTokens": []
                }
            },
            "emails": [
                {
                    "address": "admin@example.com",
                    "verified": false
                }
            ],
            "roles": ["admin"],
            "username": "admin"
        },
        {
            "_id": "Cis2pTwSMyydJv9jM",
            "createdAt": new Date(),
            "services": {
                "password": {
                    "bcrypt": "$2a$10$DlO8AQ8yw8Li1OPK9a8vZe7aVjUejVNHPpO/Ht271BWJuxZla/ATy"
                },
                "resume": {
                    "loginTokens": []
                }
            },
            "emails": [
                {
                    "address": "editor@example.com",
                    "verified": false
                }
            ],
            "roles": ["editor"],
            "username": "editor"
        },
        {
            "_id": "KkRkfz47B8taPtTBS",
            "createdAt": new Date(),
            "services": {
                "password": {
                    "bcrypt": "$2a$10$DlO8AQ8yw8Li1OPK9a8vZe7aVjUejVNHPpO/Ht271BWJuxZla/ATy"
                },
                "resume": {
                    "loginTokens": []
                }
            },
            "emails": [
                {
                    "address": "user@example.com",
                    "verified": false
                }
            ],
            "roles": ["user"],
            "username": "user"
        },
    ];

    // Insert into collection
    users.forEach(user =>  {
        Users.insert(user, { validate: false });
    });
})();
