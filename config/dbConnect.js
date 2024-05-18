const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(`mongodb+srv://naveen:naveen@cluster0.bgdbs80.mongodb.net`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

module.exports = dbConnect;
