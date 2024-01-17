import Header from "../components/Header"
import Footer from "../components/Footer"
import Breadcumb from "../components/Breadcumb"

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
      <div className="MainArea HomePage">
        <Breadcumb></Breadcumb>
      </div>
      <Footer></Footer>
    </div>
  );
}
