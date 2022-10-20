import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import "./SwiperSlider.css";

const SwiperSlider = ({ images = [] }) => {
  const [url, setUrl] = useState(images[0]);
  const [numberSwiper, setNumberSwiper] = useState(
    images.findIndex((image) => image === url)
  );

  const handleClickImages = (url) => {
    setNumberSwiper(images.findIndex((image) => image === url));
    setUrl(images[numberSwiper]);
  };

  useEffect(() => {
    setUrl(images[numberSwiper]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberSwiper]);

  const handleNextImg = () => {
    setNumberSwiper((prev) => prev + 1);
    if (numberSwiper === images.length - 1) {
      setNumberSwiper(0);
    }
    setUrl(images[numberSwiper]);
  };

  const handlePrevImg = () => {
    setNumberSwiper((prev) => prev - 1);
    if (numberSwiper === 0) {
      setNumberSwiper(images.length - 1);
    }
    setUrl(images[numberSwiper]);
  };

  return (
    <>
      <div className="swiper__slider-container">
        <div className="main__images">
          {images.map((item, index) => (
            <img
              key={index}
              src={url || item}
              alt={index}
              className={`${numberSwiper === index ? "active" : null}`}
            />
          ))}
        </div>

        <div className="button-redirect">
          <FontAwesomeIcon
            icon={faAngleRight}
            className="right circle"
            onClick={handleNextImg}
          />

          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left circle"
            onClick={handlePrevImg}
          />
        </div>
      </div>

      <div className="sub__images">
        {images.map((item, index) => (
          <img
            onClick={() => handleClickImages(item)}
            key={index}
            src={item}
            alt={index}
            className={`${item === url ? "active" : null}`}
          />
        ))}
      </div>
    </>
  );
};

export default SwiperSlider;
