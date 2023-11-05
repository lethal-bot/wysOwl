import appLogo from "../../resources/owls/logo.jpeg";
import "../FirstPage/FirstPage.css";
import Card from "./Card";
import data from "../../resources/data";
export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div id="LandingPageAppLogo">
        <img src={appLogo} alt="appLogo" id="appLogo" />
      </div>
      <div id="contentBox">
        {data.sections.map((section, index) => (
          <Card key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
