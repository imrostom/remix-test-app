import { Link, json } from "@remix-run/react";
import Breadcumb from "../components/Breadcumb"

import Header from "../components/Header"
import Footer from "../components/Footer"
import UserList from "../components/UserList"
import User from "~/models/User";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const users = await User.find({});
  return json(users);
}

export default function Index() {
  return (
    <div className="container">
      <Header></Header>
      <div className="MainArea">
        <Breadcumb></Breadcumb>
        <UserList></UserList>
      </div>
      <Footer></Footer>
    </div>
  );
}
