import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, json, redirect, useLoaderData } from "@remix-run/react";
import User from "../models/User"
import Breadcumb from "../components/Breadcumb";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ params, request }) {
  const formData = await request.formData();
  const requestData = Object.fromEntries(formData);

  const user = await User.findOneAndUpdate({_id: params.id}, requestData);

  return redirect("/users");
}


export async function loader({params}) {
  const user = await User.findOne({_id: params.id});
  return json(user);
}

export default function Index() {
  const user = useLoaderData();

  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="MainArea">
          <Breadcumb></Breadcumb>

          <div className="row">
            <div className="col-sm-6">
              <Form method="post">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" defaultValue={user.name} className="form-control" name="name" id="name" placeholder="john doe" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" defaultValue={user.email} className="form-control" name="email" id="email" placeholder="your-email@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea className="form-control" id="address" name="address" placeholder="mirpur, dhaka, bangladesh" defaultValue={user.address}></textarea>
                </div>
                <div className="mb-3">
                  <button className="btn btn-success" type="submit">Update User</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
