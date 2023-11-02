const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
// Your other code here


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// ... (Your imports and setup)

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  const senderName = `${firstName} ${lastName}`;
  
  const mailOptions = {
    from: `"Your Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Change to use the env variable
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      if (error.response) {
        res.status(400).json({ error: "Invalid request" });
      } else if (error.code === 'EAUTH') {
        res.status(401).json({ error: "Authentication failed" });
      } else {
        res.status(500).json({ error: "Message sending failed" });
      }
    } else {
      res.status(200).json({ message: "Message Sent" });
    }
  });
});
