export default function InnerCard() {
  return (
    <div className="InnerCard">
      <p>Section 1</p>
      <p>3/3 units</p>
      <div className="progressContainer">
        <progress value={50} max={100} className="progressBar"></progress>
      </div>
      <p>start with the basics with the legend aditya</p>
      <button className="button completedButton">completed 🎉</button>
    </div>
  );
}
