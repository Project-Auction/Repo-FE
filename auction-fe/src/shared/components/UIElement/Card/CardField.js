import "./Card.css";

/*
  ? to create layout Card
*/

function CardField(props) {
  return (
    <div className={`card__wrapper ${props.className}`}>{props.children}</div>
  );
}

export default CardField;
