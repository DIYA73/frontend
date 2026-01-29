import Portfolio from "../models/Portfolio.js";

export const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
