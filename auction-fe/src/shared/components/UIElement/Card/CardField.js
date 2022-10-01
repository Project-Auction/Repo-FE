import "./Card.css";

function CardField(props) {
  return (
    <div className={`card__wrapper ${props.className}`}>{props.children}</div>
  );
}

export default CardField;
