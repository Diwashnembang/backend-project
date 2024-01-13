import connectDB from "./db/db.js";
import "dotenv/config";
import { app } from "./app.js";
connectDB()
  .then(() => {
    app.on("error", (e) => {
      console.log("can't connect with express", e);
      throw e;
    });
    app.get("/", (req, res) => {
      res.send("hello world");
    });
    app.listen(process.env.PORT, () => {
      console.log("server listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("error connecting mongo do!!!", err);
  });
