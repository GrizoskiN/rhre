
const sgMail = require('@sendgrid/mail')
const {SENDGRID_API_KEY, FROM_EMAIL, EMAIL_TO} = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

export default async function handler(req, res){
  const {name, lastName, email, phone, notes, selectedProject, range} = JSON.parse(req.body);
  if (!name || !email ) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  const message = `
    Name:${name}\r\n
    Last Name:${lastName}\r\n
    Email:${email}\r\n
    Phone: ${phone}\r\n
    Project: ${selectedProject}\r\n
    How Did You Hear About Us: ${notes}
    Range: ${range}\r\n
  `
  const data ={
    to: EMAIL_TO,
    from: FROM_EMAIL,
    subject: 'New web form message',
    text: message,
    html: `<h3>Name: <strong>${name}</strong></h3>
    <h3>Email: <strong>${email}</strong></h3>
    <h3>Last Name: <strong>${lastName}</strong></h3>
    <h3>Phone: <strong>${phone}</strong></h3>
    <h3>Project: <strong>${selectedProject}</strong></h3>
    <h3>Notes: <strong>${notes}</strong></h3>
    <h3>Range - Amount in AED: <strong>${range}</strong></h3>
    `
  }
 
  await sgMail.send(data)
  res.json({success: true})
}