import Link from "next/link";
import React from "react";
import Style from "./footerStyle.module.css";

const Footer: React.FC = () => {
  const footerItem = [
    {
      href: "",
      title: "صفحه اصلی",
    },
    { href: "", title: "رویداد ها" },

    { href: "", title: "تماس با ما" },
    { href: "", title: "درباره ما" },
  ];
  const comItem = [
    {
      id: "instagram",
      href: "",
      title: "@anjoman",
    },
    {
      id: "telegram",

      href: "",
      title: "@anjoman",
    },
    {
      id: "email",

      href: "",
      title: "anjomn@gmail.com",
    },
    {
      id: "location",

      href: "",
      title: "بلوار ۲۹ بهمن − دانشگاه تبریز − دانشکده برق",
    },
  ];

  return (
    <div className={Style.footerContainer}>
      <div className={Style.footerContent}>
        <div className={Style.footerTitle}>
          <div className={Style.logoContainer}>
            <img src="./media/logo.svg" />
          </div>
          <div className={Style.access}>دسترسی ها</div>
          <div className={Style.comminication}>راه های ارتباطی</div>
        </div>
        <div className={Style.footerSubtitle}>
          <div className={Style.description}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </div>
          <div className={Style.accessItemsContainer}>
            {footerItem.map((item, i) => (
              <div className={Style.item}>
                <span className={Style.itemtTitle}>{item.title}</span>
              </div>
            ))}
          </div>
          <div className={Style.comminication}>
            {comItem.map((item, i) => (
              <div className={Style.item}>
                <img className={Style.img} src={`/media/${item.id}.svg`} />
                <span className={Style.itemtTitle}>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
