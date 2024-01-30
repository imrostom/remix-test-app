import { Form, Link, json } from "@remix-run/react";
import Breadcumb from "../components/Breadcumb"

import Header from "../components/Header"
import Footer from "../components/Footer"

export async function action({ params, request }) {
  const formData = await request.formData();

  const image = formData.get('image');

  console.log(image);

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
            <Form method="post" encType="multipart/form-data">
              <input type="file" name="image" id="image" />
              <input type="submit" />
            </Form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
