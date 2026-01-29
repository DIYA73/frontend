import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  about: String,
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      link: String
    }
  ]
});

export default mongoose.model("Portfolio", portfolioSchema);
