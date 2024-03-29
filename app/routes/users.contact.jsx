import { Form, Link, json } from "@remix-run/react";
import Breadcumb from "../components/Breadcumb"

import Header from "../components/Header"
import Footer from "../components/Footer"
import {nodemailer} from "../services/email.server";

export async function action({ params, request }) {
  // const formData = await request.formData();
  // const requestData = Object.fromEntries(formData);

  // console.log(requestData);

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6ac9aa45bb99db",
      pass: "d4020c36dcb127",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  return json({ status: false, message: "Please provide valid user data." });
}

export default function Index() {
  return (
    <div className="container">
      <Header></Header>
      <div className="MainArea">
        <Breadcumb></Breadcumb>
        <div className="row">
          <div className="contact-form">
            <Form method="post">
              <h3 className="mb-3">Drop Us a Message</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Your Name *" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Your Email *" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-control" placeholder="Your Phone Number *" />
                  </div>

                  <div className="mb-3">
                    <button className="btnContact">Send Message</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea style={{ minHeight: '210px' }} name="message" rowSpan="10" className="form-control" placeholder="Your Message *"></textarea>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
