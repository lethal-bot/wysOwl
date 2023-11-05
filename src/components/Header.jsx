import icons from "../resources/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const arr = [icons.faHouse, icons.faGamepad, icons.faAward, icons.faUser];
export default function Header() {
  const [currentState, setCurrentState] = useState(0);
  const handleColor = (index) => {
    console.log(index);
    setCurrentState(index);
  };

  return (
    <header>
      <div id="appLogo">
        <FontAwesomeIcon icon={icons.faDove} className="headerIcons white" />
      </div>
      <div id="icons">
        {arr.map((name, index) => (
          <FontAwesomeIcon
            key={index}
            icon={name}
            className={
              index == currentState ? "headerIcons white" : "headerIcons"
            }
            onClick={() => handleColor(index)}
          />
        ))}
      </div>
    </header>
  );
}
