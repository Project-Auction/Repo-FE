import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, useForm } from "react-hook-form";

import "./ProductDetailInfo.css";
import InputField from "../../../../shared/components/FormElement/Input";
import ButtonField from "../../../../shared/components/FormElement/Button";
import CardField from "../../../../shared/components/UIElement/Card/CardField";

const ProductDetailInfo = (props) => {
  const methods = useForm();

  return (
    <>
      <CardField className="product-detail__info-container">
        <div className="header">
          <h3 className="name">
            Lenovo ThinkPad T15 Gen 2 (Nhập khẩu) (20W4002HUS)
          </h3>

          <span className="sub-title">Code Product: ThinkpadT15NK02NO</span>

          <h3 className="title">Thời gian đấu giá</h3>
          <div className="product-detail__info-group">
            <span className="product-detail__info-item">
              Ngày bắt đầu
              <p>16h00 12/06/2001</p>
            </span>

            <span className="product-detail__info-item">
              Ngày kết thúc
              <p>16h00 12/06/2001</p>
            </span>

            <span className="product-detail__info-item">
              Thời gian còn lại
              <p>2:00:00</p>
            </span>
          </div>

          <h3 className="title">Tình trạng</h3>
          <div className="product-detail__info-group">
            <span className="product-detail__info-item">
              Giá gốc
              <p>300.000 VND</p>
            </span>

            <span className="product-detail__info-item">
              Giá hiện tại
              <p>300.000 VND</p>
            </span>

            <span className="product-detail__info-item">
              Mỗi lần tăng ít nhất
              <p>300.000 VND</p>
            </span>
          </div>

          <h3 className="title">Giá của bạn</h3>

          <form className="product-detail__info-group">
            <Controller
              control={methods.control}
              name="priceAuction"
              render={({ field: { onChange } }) => (
                <InputField
                  element="input"
                  type="text"
                  onChange={onChange}
                  placeholder="Nhập giá của bạn"
                  required
                  fullWidth
                />
              )}
            />
            <ButtonField type="submit" primary>
              Đấu giá
            </ButtonField>
          </form>
        </div>
      </CardField>

      <CardField className="product-detail__info-container footer">
        <ButtonField primary>DANH SÁCH ĐANG ĐẤU GIÁ</ButtonField>
      </CardField>
    </>
  );
};

export default ProductDetailInfo;
