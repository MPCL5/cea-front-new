import React from "react";
import Style from "./cardStyle.module.css";
interface NewsCardProps {
  newsData: any;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsData }) => {
  return (
    <div className={Style.container}>
      <img className={Style.eventPoster} src="/media/eventPoster.png" />
      <div className={Style.cardBodyContainer}>
        <div className={Style.cardBody}>
          <span className={Style.yellowCircle}></span>
          <span className={Style.purpleCircle}></span>
          <div className={Style.cardBodyContent}>
            <div className={Style.title}>عنوان رویداد</div>
            <div className={Style.subTitle}>چاپگرها و متون بلکه qروزنامه </div>
            <div className={Style.description}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </div>
            <div className={Style.action}>
              <button className={Style.viewEvent}>
                مشاهده رویداد
                <img src="/icons/arrow-left.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
