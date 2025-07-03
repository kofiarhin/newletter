import React from "react";
import "./downloadButton.styles.scss";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost:5000/download", {
=======
      const response = await fetch("http://localhost:5000/api/download", {
>>>>>>> test
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
<<<<<<< HEAD
      a.download = "file.pdf"; // Change to your desired filename
=======
      a.download = "sample.pdf"; // Change to your desired filename
>>>>>>> test
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      Download File
    </button>
  );
};

export default DownloadButton;
