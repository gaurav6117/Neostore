const express = require("express");
const app = express();
const PORT = 8899;
const cors = require("cors");
const connectDB = require("./config/db");
connectDB()
app.use(cors());
app.use("/public", express.static("public"))
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: false }));
const apiRoutes = require("./Routes/apiRoutes")
const loginRoutes = require("./Routes/loginRoutes")
const adminRoutes = require("./Routes/adminRoutes")
app.use("/product", apiRoutes)
app.use("/login", loginRoutes)
app.use("/admin", adminRoutes)
app.get("*", (req, res) => {
    res.send("Invalid URL: Page not found")
})
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Working on ${PORT}`);
})