const express = require("express");
const {
    sentEmailAndCreateRecipient,
    isOpen,
    getAllRecipients,
    deleteRecipient
} = require("../controllers/recipient.controller");
const router = express.Router();

router.get("/", getAllRecipients);
router.post("/send-email", sentEmailAndCreateRecipient);
router.delete("/delete-email/:id", deleteRecipient);
router.get("/is-open/:id", isOpen);
module.exports = router;
