import React from "react";
import Style from "./newsCardStyle.module.css";
interface EventCardProps {
  eventData: any;
}

const EventCard: React.FC<EventCardProps> = ({ eventData }) => {
  return (
    <div className={Style.newsContainer}>
      <span className={Style.yellowCircle}></span>
      <span className={Style.purpleCircle}></span>
      <div className={Style.posterContainer}>
        <img className={Style.newsPoster} src="/media/eventPoster.png" />
      </div>
      <div className={Style.cardBodyContainer}>
        <div className={Style.cardTitleBody}>
          <div className={Style.right}>
            <div className={Style.titleGrid}>
              <div className={Style.title}>عنوان رویداد</div>
            </div>
            <div className={Style.subTitleGrid}>
              <div className={Style.subTitle}>
                چاپگرها و متون بلکه qروزنامه{" "}
              </div>
            </div>
          </div>
          <div className={Style.left}>btn</div>
        </div>
        <div className={Style.cardBodyContent}>
          <div className={Style.description}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </div>
        </div>
        <div className={Style.action}>
          <button className={Style.viewEvent}>
            مشاهده رویداد
            <img src="/icons/arrow-left.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
