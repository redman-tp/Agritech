const fs = require("fs");
const path = require("path");

// Path to the 'logos' folder
const folderPath = path.join(__dirname, "logos");

// Function to rename WebP files
function renameWebpFiles() {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Filter only WebP files
    const webpFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".webp"
    );

    // Rename each WebP file
    webpFiles.forEach((file, index) => {
      const oldPath = path.join(folderPath, file);
      const newPath = path.join(folderPath, `webplogo${index + 1}.webp`);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming file ${file}:`, err);
        } else {
          console.log(`Renamed ${file} to ${path.basename(newPath)}`);
        }
      });
    });
  });
}

// Execute the function
renameWebpFiles();
