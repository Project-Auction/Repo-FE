import "./AccountItem.css";
import Image from "../Image";

const AccountItem = (props) => {
  const { src, userName, className, imageClass, email, bodyClass, circle } =
    props;

  return (
    <div className={`account__item-container ${className}`}>
      <Image
        src={src}
        alt={userName}
        className={`image ${circle && "circle"} ${imageClass}`}
      />

      <div className={`account__item-info ${bodyClass}`}>
        <h3 className="name">{userName}</h3>
        <span className="email">{email}</span>
      </div>
    </div>
  );
};

export default AccountItem;
