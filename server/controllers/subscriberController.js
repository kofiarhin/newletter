const getSubscribers = async (req, res) => {
  return res.json({ message: "get subscribers" });
};

const createSubscribers = async (req, res) => {
  return res.json({ message: "create subscribers" });
};

module.exports = {
  getSubscribers,
  createSubscribers,
};
