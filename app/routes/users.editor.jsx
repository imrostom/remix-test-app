import Header from "../components/Header"
import Footer from "../components/Footer"
import TextEditor from "../components/Editor.client";
import { Suspense, lazy } from "react";
import QuillEditor from "../components/QuillEditor.client";
import Breadcumb from "../components/Breadcumb";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <div className="MainArea">
          <Breadcumb></Breadcumb>
          <div className="row">
            <div className="col-sm-6 offset-3">
              <Suspense callback="Loading...">
                <QuillEditor></QuillEditor>
              </Suspense>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
