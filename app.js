const express = require("express");
const app = express();
const userRoutes = require("./routes/user-route");
const roleRoutes = require("./routes/role-route");
const PORT = 8089;

const main = async () => {
  express()
    .use(express.json())
    .use("/users", userRoutes)
    .use("/roles", roleRoutes)
    .get("/", (req, res) =>
      res.json({
        status: 1,
        message: "Hello from app.js",
      })
    )
    .listen(PORT, () => console.log(`Server is running on ${PORT}`));
};

main();
