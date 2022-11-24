const mongoose = require("mongoose");

const url =
"mongodb+srv://grupo7:P3rr1t02022@cluster7.uz0dwy4.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
