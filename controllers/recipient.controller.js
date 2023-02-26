const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const Recipient = require("../models/recipient.model");

// to send email to user
const sentEmailAndCreateRecipient = async (req, res) => {
    try {
        const { adminEmail, recipient, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_PASS,
            },
        });

        const recipientId = uuidv4();
        const trackingUrl = `${process.env.HOSTING_URL}/recipient/is-open/${recipientId}`;

        const mailOptions = {
            from: adminEmail,
            to: recipient,
            subject: subject,
            html: `<p>${message}</p><img src=${trackingUrl} width="1px" height="1px"/>`,
        };
        await transporter.sendMail(mailOptions);

        // create an recipient
        const newRecipient = new Recipient({
            id: recipientId,
            status: "Sent",
            statusTime: new Date().toLocaleString(),
            sentTime: new Date().toLocaleString(),
            recipient,
            subject,
            message,
        });
        // to store newUser in mongoDB
        await newRecipient.save();
        // sending a response to front-end
        res.status(201).json(newRecipient);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: "There is an error" });
    }
};

// to check email has been opened or not by img tracking
const isOpen = async (req, res) => {
    const timeOpened = new Date().toLocaleString();
    try {
        const recipient = await Recipient.findOne({ id: req.params.id });
        recipient.status = "Opened";
        recipient.statusTime = timeOpened;
        // to restore the user to mongoDB
        await recipient.save();
        console.log(recipient);
        res.status(200).send({ message: "update" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            error: "error",
        });
    }
};

// get all recipients
const getAllRecipients = async (req, res) => {
    try {
        const recipients = await Recipient.find();
        res.status(200).json(recipients);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            error: "there is an error",
        });
    }
};

module.exports = { sentEmailAndCreateRecipient, isOpen, getAllRecipients };
