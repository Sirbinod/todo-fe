import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ data, children }) => {
  return (
    <>
      <Header data={data} />
      <main className="custom-h my-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
