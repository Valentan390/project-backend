import mongoose from "mongoose";

import { app } from "./app.js";

// Sd2uz37YodvPfBiy

const DB_HOST =
  "mongodb+srv://Valentyn:Sd2uz37YodvPfBiy@cluster0.ldsvug3.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
