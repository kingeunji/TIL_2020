module.exports = function(app, fs) {
    app.get('/', function(req, res) {
        res.render('index.html')
    });
    app.get('/about', function(req, res) {
        res.render('about.html');
    });

    // GET /list
    app.get('/list', function(req, res) {
        fs.readFile(__dirname + '/../data/user.json', "utf8", function(err, data) {
            console.log(data);
            res.end(data);
        });
    });

    // GET /getUser/:username
    app.get('/getUser/:username', function(req, res) {
        fs.readFile(__dirname + "/../data/user.json", 'utf8', function(err, data) {
            var users = JSON.parse(data);
            res.json(users[req.params.username]);
        });
    });

    // POST /addUser/:userName
    app.post('/addUser/:username', function(req, res) {
        var result = {};
        var username = req.params.username;

        // CHECK REQ VALIDITY
        if (!req.body["password"] || !req.body["name"]) {
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        // LOAD DATA & CHECK DUPLICATION
        fs.readFile(__dirname + "/../data/user.json", 'utf8', function(err, data) {
            var users = JSON.parse(data);
            if (users[username]) {
                // DUPLICATION FOUND
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }

            // ADD TO DATA
            users[username] = req.body;

            // SAVE DATA
            fs.writeFile(__dirname + "/../data/user.json",
                JSON.stringify(users, null, '\t'), "utf8",
                function(err, data) {
                    result = { "success": 1 };
                    res.json(result);
                })
        })
    });

    // PUT /updateUser/:username
    app.put('/updateUser/:username', function(req, res) {
        var result = {};
        var username = req.params.username;

        // CHECK REQ VALIDITY
        if (!req.body["password"] || !req.body["name"]) {
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        // LOAD DATA & CHECK DUPLICATION
        fs.readFile(__dirname + "/../data/user.json", 'utf8', function(err, data) {
            var users = JSON.parse(data);
            if (!users[username]) {
                // DUPLICATION FOUND
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            users[username] = req.body;

            // SAVE DATA
            fs.writeFile(__dirname + "/../data/user.json",
                JSON.stringify(users, null, '\t'), "utf8",
                function(err, data) {
                    result = { "success": 1 };
                    res.json(result);
                })
        })
    });

    // DELETE /deleteUser/:username
    app.delete('/deleteUser/:username', function(req, res) {
        var result = {};

        fs.readFile(__dirname + "/../data/user.json", "utf8", function(err, data) {
            var users = JSON.parse(data);

            if (!users[req.params.username]) {
                result["success"] = 0;
                result["error"] = "not found";
                res.json(result);
                return;
            }

            delete users[req.params.username];
            fs.writeFile(__dirname + "/../data/user.json",
                JSON.stringify(users, null, '\t'), "utf8",
                function(err, data) {
                    result["success"] = 1;
                    res.json(result);
                    return;
                })

        })
    })

    // LOGIN API 
    app.get('/login/:username/:password', function(req, res) {
        var sess;
        sess = req.session;

        fs.readFile(__dirname + '/../data/user.json', "utf8", function(err, data) {
            var users = JSON.parse(data);
            var username = req.params.username;
            var password = req.params.password;

            var result = {};

            if (!users[username]) {
                result["success"] = 0;
                result["error"] = "USER NOT FOUND";
                res.json(result);
                return;
            }

            if (users[username]["password"] == password) {
                result["success"] = 1;
                sess.username = username;
                sess.name = users[username]["name"];
                res.json(result);

            } else {
                result["success"] = 0;
                result["error"] = "incorrect";
                res.json(result);
            }
        });
    });

    // LOGOUT API
    app.get('/logout', function(req, res) {
        sess = req.session;
        if (sess.username) {
            req.session.destory(function(err) {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            })
        } else {
            res.redirect('/');
        }
    })

}