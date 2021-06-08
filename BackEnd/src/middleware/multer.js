const multer = require("multer");
const upload = multer({ dest: "../Resources/Images" });
module.exports = upload;
