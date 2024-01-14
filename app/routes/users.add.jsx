import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ params, request }) {
  console.log(request, params);

  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  return updates;
}

export default function Index() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="MainArea">
          <Link className="btn btn-primary userListButton" to="/users">User List</Link>
          <Link className="btn btn-primary" to="/users/add">User Add</Link>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-6">
              <Form method="post">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="john doe" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="your-email@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea className="form-control" id="address" name="address" placeholder="mirpur, dhaka, bangladesh"></textarea>
                </div>
                <div className="mb-3">
                  <button className="btn btn-success" type="submit">Add User</button>
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
