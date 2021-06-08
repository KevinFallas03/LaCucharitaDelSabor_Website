const express = require("express");
const router = express.Router();
const utilsController = require("../controllers/utils");
const upload = require("../middleware/multer");

router.post("/image/upload",upload.single("imageFile"),utilsController.uploadImage)
router.get("/image/:image",utilsController.getImage)
module.exports = router;