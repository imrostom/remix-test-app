import { Form, Link, json } from "@remix-run/react";
import Breadcumb from "../components/Breadcumb"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { FetchForm } from "../components/FetchForm";

export async function action({ params, request }) {
  // const formData = await request.formData();
  // const requestData = Object.fromEntries(formData);

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
              <div className="row">
                <FetchForm></FetchForm>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
