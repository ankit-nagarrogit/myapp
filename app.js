let express = require("express");
let app = express();

app.get("/", () => {
  resizeBy.send("This is response from Node dummy app !!!");
});

app.listen(3000, function () {
  console.log("This app is running at 3000");
});
