import { forwardRef, useState } from "react";
import "./Image.css";
import noImage from "../../../../assets/img/no-img.webp";

const Image = forwardRef((props, ref) => {
  const { placeSrc, src, className, alt, circle } = props;

  const classes = `image ${className}
  ${circle && "circle"}`;

  const [fullback, setFullback] = useState("");

  /* To resolver when error src and placeSrc we will get "src noImage" */
  const handleError = () => {
    setFullback(placeSrc ? placeSrc : noImage);
  };

  return (
    <img
      src={src || fullback}
      className={classes}
      ref={ref}
      alt={alt}
      onError={handleError}
    />
  );
});

export default Image;
