import React from "react";
import Style from "./newsCardStyle.module.css";
import OutLinedButton from "../Button/OutLinedButton";
import TextButton from "../Button/TextButton";
interface EventCardProps {
  eventData: any;
}

const EventCard: React.FC<EventCardProps> = ({ eventData }) => {
  return (
    <div className={Style.newsContainer}>
      <div className={Style.bannerContainer}>
        <img className={Style.topBanner} src="/media/Vector 33.svg" />
        <img className={Style.bottomBanner} src="/media/Vector 34.svg" />
      </div>
      <div className={Style.posterContainer}>
        <img className={Style.newsPoster} src="/media/eventPoster.png" />
      </div>
      <div className={Style.cardBodyContainer}>
        <div className={Style.titleGrid}>
          <div className={Style.title}>عنوان رویداد</div>
        </div>
        <div className={Style.eventButton}>
          <OutLinedButton text="مشاهده رویداد" />
        </div>

        <div className={Style.subTitleGrid}>
          <div className={Style.subTitle}>چاپگرها و متون بلکه qروزنامه </div>
        </div>
        <div className={Style.description}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </div>
        <div className={Style.action}>
          <TextButton text="مشاهده رویداد" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
