import nodemailer from 'nodemailer';
import fs from 'fs';

export async function POST(request) {
  const body = await request.json();
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 587,
  //   secure: true, // use SSL
  //   auth: {
  //     user: process.env.EMAIL,
  //     pass: process.env.PASSWORD,
  //   },
  // });
  // await transporter.verify();
  // const mailOptions = {
  //   from: process.env.EMAIL,
  //   to: 'petara.corporation@gmail.com,sales@petaracorp.com,marketing@petaracorp.com',
  //   cc: 'dnyanesh@petaracorp.com',
  //   replyTo: body.email,
  //   subject: 'Contact Us',
  //   html: `<p>Hi, You have a new message from ${body.name}.</p>
  //   <p>Here are the details:</p>
  //   <p>Name: ${body.userName}</p>
  //   <p>Email: ${body.email}</p>
  //   <p>Phone: ${body.phone}</p>
  //   <p>Interested in Product: ${body.selectedProduct}</p>
  //   <p>Company Type: ${body.selectedCompanyType}</p>
  //   <p>Custom Service: ${body.customService}</p>
  //   <p>Event Date: ${body.eventDate}</p>
  //   <p>Message: ${body.message}</p>`,
  // };
  // console.log(mailOptions);
  // const info = await transporter.sendMail(mailOptions);
  // console.log(info);
  fs.writeFileSync(`${body.email}.json`, JSON.stringify(body));
  return Response.json({
    message: "Your request has been received. We'll get back to you soon!",
    body,
  });
}
