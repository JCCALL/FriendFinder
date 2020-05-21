var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;

    console.log(newCharacter);

    characters.push(newCharacter);

    res.json(newCharacter);
  });
};
