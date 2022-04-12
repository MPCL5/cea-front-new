import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Style from "./layoutStyle.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={Style.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
