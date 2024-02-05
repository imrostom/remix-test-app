import { Form } from "@remix-run/react";
import Breadcumb from "../components/Breadcumb"

import Header from "../components/Header"
import Footer from "../components/Footer"

import {
  json,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createFileUploadHandler as createFileUploadHandler,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";


export async function action({ params, request }) {
  const uploadHandler = composeUploadHandlers(
    createFileUploadHandler({
      directory: "public/uploads",
      maxPartSize: 300000000,
    }),
    createMemoryUploadHandler(),
  );
  const formData = await parseMultipartFormData(request, uploadHandler);
  
  const image = formData.get("image");
  if (!image || typeof image === "string") {
    return json({ error: "something wrong", imgSrc: null });
  }


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
