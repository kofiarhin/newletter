const app = require("./app");
const connectDB = require("./config/db.js")

const port = process.env.PORT || 5000;

// connect to database
connectDB()

app.listen(port, () => {
  console.log("server started on port:", port);
});
