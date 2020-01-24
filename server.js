const express = require("express");
const app = express();
const DbConnection = require("./db/mongoose");

PORT = process.env.PORT || 3000;
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts.js");

app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
