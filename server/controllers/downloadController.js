const path = require("path");
const fs = require("fs");

const getDownload = async (req, res) => {
  const filePath = path.join(__dirname, "..", "files", "sample.pdf"); // Change file path
  const check = fs.existsSync(filePath);
  if (!check) {
    return res
      .status(404)
      .json({ success: false, error: "file does not exist" });
  }

  return res.download(filePath, "sample.pdf", (err) => {
    if (err) {
      console.log("Error sending file", err);
      return res
        .status(500)
        .json({ success: false, error: "Error sending file" });
    }
  });
  return res.json({ message: "checkif file exist" });
  //   res.download(filePath, "file.pdf", (err) => {
  //     if (err) {
  //       console.error("Error sending file:", err);
  //       res.status(500).send("Error downloading file");
  //     }
  //   });
};

module.exports = {
  getDownload,
};
