let db = require("./dao");
db.run("SELECT ? from database", ["*"], (err) => {
  if (err) {
    console.log("ERROR!", err);
  }
});
       