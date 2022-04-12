import Link from "next/link";
import React from "react";
import Style from "./headerStyle.module.css";

const Header: React.FC = () => {
  const headerItem = [
    {
      href: "",
      title: "صفحه اصلی",
    },
    { href: "", title: "رویداد ها" },
    {
      href: "",
      title: "اخبار",
    },
    { href: "", title: "گالری عکس" },
    {
      href: "",
      title: "مدرس ها",
    },
    { href: "", title: "تماس با ما" },
    { href: "", title: "درباره ما" },
  ];

  return (
    <div className={Style.headerContainer}>
      <div className={Style.logoContainer}>
        <img src="/media/logo.svg" className={Style.logo} />
      </div>
      {headerItem.map((item, i) => (
        <div className={Style.item}>
          <Link href={item.href}>
            <span className={Style.itemtTitle}>{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
