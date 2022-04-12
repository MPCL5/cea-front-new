import React from "react";
import { text } from "stream/consumers";
import Style from "./buttonStyle.module.css";
interface OutLinedButtonProps {
  text: string;
}

const OutLinedButton: React.FC<OutLinedButtonProps> = ({ text }) => {
  return <button className={Style.outLinedButton}>{text}</button>;
};

export default OutLinedButton;
