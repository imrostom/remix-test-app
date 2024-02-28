import Header from "../components/Header"
import Footer from "../components/Footer"
import Breadcumb from "../components/Breadcumb"

import Test from "../components/Test.client"
import { useEffect, useState } from "react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="container">
      <Header></Header>
      <div className="MainArea HomePage">
        {loading && <Test />}
        <Breadcumb></Breadcumb>
      </div>
      <Footer></Footer>
    </div>
  );
}
