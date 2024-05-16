import "./custombuttonanimation.css";
import { useState, useRef, useEffect } from "react";
export default function CustomButtonAnimation() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const buttonRef = useRef();

  useEffect(() => {
    const applyStyle = () => {
      buttonRef.current.classList.add("button");
    };

    const onClick = () => {
      buttonRef.current.classList.remove("clicked");

      buttonRef.current.classList.add("clicked");
    };
    applyStyle();

    //delete
    buttonRef.current.addEventListener("mouseup", onClick);

    const cleanUpRef = buttonRef.current;

    return () => {
      cleanUpRef.removeEventListener("mouseup", onClick);
    };
  });

  return (
    <div className="test">
      <div
        ref={buttonRef}
        className={isActive ? "clicked" : "button"}
        onClick={toggleClass}
      ></div>
    </div>
  );
}
