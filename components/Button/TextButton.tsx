import React from "react";
import { text } from "stream/consumers";
import Style from "./buttonStyle.module.css";
interface TextButtonProps {
  text: string;
}

const TextButton: React.FC<TextButtonProps> = ({ text }) => {
  return (
    <button className={Style.textButton}>
      {text}
      <img src="/icons/arrow-left.svg" className={Style.textButtonIcon} />
    </button>
  );
};

export default TextButton;
