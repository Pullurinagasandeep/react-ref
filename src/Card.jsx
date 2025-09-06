export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.data.imgsrc} alt="card-img" />
      <h3>{props.data.cardTitle}</h3>
      <p>{props.data.cardText}</p>
    </div>
  );
}
