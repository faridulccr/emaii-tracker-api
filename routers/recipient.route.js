const express = require("express");
const {
    sentEmailAndCreateRecipient,
    isOpen,
    getAllRecipients,
} = require("../controllers/recipient.controller");
const router = express.Router();

router.get("/", getAllRecipients);
router.post("/send-email", sentEmailAndCreateRecipient);
router.get("/is-open/:id", isOpen);
module.exports = router;
