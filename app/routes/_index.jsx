import Header from "../components/Header"
import Footer from "../components/Footer"
import UserList from "../components/UserList"
import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <Header></Header>
      <div className="MainArea">
        <Link className="btn btn-primary userListButton" to="/users">User List</Link>
        <Link className="btn btn-primary" to="/users/add">User Add</Link>
        <br />
        <br />
        <UserList></UserList>
      </div>
      <Footer></Footer>
    </div>
  );
}
