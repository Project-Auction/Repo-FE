import { faChevronRight, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import RadioField from "../../../../shared/components/FormElement/Radio";

import "./HomeSideLeft.css";

/* Set default range money */
const rangeMoney = [
  { labelInput: "Nổi bật nhất", value: "default" },
  { labelInput: "Giá từ cao đến thấp", value: "priceToLow" },
  { labelInput: "Giá từ thấp đến cao", value: "lowToPrice" },
];

const HomeSideLeft = (props) => {
  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className={`home__side-let-container ${props.className}`}>
      <div className="range-money">
        <h3 className="title">
          <FontAwesomeIcon icon={faRightLeft} />
          <span className="ml-3">Sắp xếp theo</span>
        </h3>

        <RadioField
          row
          items={rangeMoney}
          onChange={handleChange}
          defaultValue={rangeMoney[0].value}
          list
        />
      </div>

      <div className="categories">
        <h3 className="title">Danh Mục</h3>

        <ul className="categories__list">
          <li className="categories__item">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon-arrow-right"
            />
            Nội thất
          </li>

          <li className="categories__item">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon-arrow-right"
            />
            Nội thất
          </li>

          <li className="categories__item">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon-arrow-right"
            />
            Nội thất
          </li>
          <li className="categories__item">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="icon-arrow-right"
            />
            Nội thất
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(HomeSideLeft);
