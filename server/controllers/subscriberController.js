const getSubscribers = async (req, res) => {
  return res.json({ message: "get subscribers" });
};

const createSubscribers = async (req, res) => {
  const { email, name } = req.body;
  return res.json({ name, email });
};

module.exports = {
  getSubscribers,
  createSubscribers,
};
