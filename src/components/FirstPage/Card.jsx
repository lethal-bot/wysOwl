import data from "../../resources/data.jsx";
import owl1 from "../../resources/owls/owl1.png";
import owl2 from "../../resources/owls/owl2.png";
import owl3 from "../../resources/owls/owl3.png";
import owl4 from "../../resources/owls/owl4.png";
import owl5 from "../../resources/owls/owl5.png";
import InnerCard from "./InnerCard.jsx";
const arrOfOwls = [owl1, owl2, owl3, owl4, owl5];
export default function Card({ index }) {
  return (
    <div className="Card">
      <img src={arrOfOwls[index]} alt="owl image" className="owlImages" />
      <InnerCard />
    </div>
  );
}
