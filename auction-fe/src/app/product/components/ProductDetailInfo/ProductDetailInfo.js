import { useState } from "react";
import { useForm } from "react-hook-form";

import "./ProductDetailInfo.css";
import { FormInput } from "../../../../shared/components/FormElement/Input";
import ButtonField from "../../../../shared/components/FormElement/Button";
import CardField from "../../../../shared/components/UIElement/Card/CardField";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import Modal from "../../../../shared/components/UIElement/Modal";
import Table from "../../../../shared/components/UIElement/Table";

import { HEADER_GRID, DUMMY_PRODUCTS } from "../../../home/page/home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductDetailInfo = (props) => {
  const methods = useForm();

  const [showModal, setShowModal] = useState(false);

  const handleOnClear = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Modal
        show={showModal}
        footerClass="d-flex justify-content-end"
        onClear={showModal}
        footer={
          <>
            <ButtonField danger onClick={handleOnClear}>
              HỦY
            </ButtonField>
          </>
        }
      >
        <Table filter header={HEADER_GRID} items={DUMMY_PRODUCTS} />
      </Modal>

      <CardField className="product-detail__info-container">
        <div className="header">
          <h3 className="name">
            Lenovo ThinkPad T15 Gen 2 (Nhập khẩu) (20W4002HUS)
          </h3>

          <span className="sub-title">Code Product: ThinkpadT15NK02NO</span>

          <h3 className="title">Time For Auction</h3>
          <div className="product-detail__info-group">
            <span className="product-detail__info-item">
              Start Date
              <p>16h00 12/06/2001</p>
            </span>

            <span className="product-detail__info-item">
              End Date
              <p>16h00 12/06/2001</p>
            </span>

            <span className="product-detail__info-item">
              Remaining Time
              <p>2:00:00</p>
            </span>
          </div>

          <h3 className="title">Status</h3>
          <div className="product-detail__info-group">
            <span className="product-detail__info-item">
              Original Price
              <p>300.000 VND</p>
            </span>

            <span className="product-detail__info-item">
              Current Price
              <p>300.000 VND</p>
            </span>

            <span className="product-detail__info-item">
              Each increase at least<p>300.000 VND</p>
            </span>
          </div>

          <h3 className="title">Your Price</h3>

          <CustomFormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="price__auction product-detail__info-group">
                <button className="btn__jump-price">
                  <FontAwesomeIcon className="icon" icon={faMinus} />
                </button>
                <FormInput
                  fieldName="priceAuction"
                  element="input"
                  type="number"
                  placeholder="Nhập giá của bạn"
                  required
                  fullWidth
                  onFocus={() => {}}
                />
                <button className="btn__jump-price">
                  <FontAwesomeIcon className="icon" icon={faPlus} />
                </button>
              </div>

              <ButtonField type="submit" primary className="btn__auction">
                <FontAwesomeIcon icon={faGavel} className="icon" />
                Auction
              </ButtonField>
            </form>
          </CustomFormProvider>
        </div>
      </CardField>

      <CardField className="product-detail__info-container footer">
        <ButtonField primary onClick={handleOpenModal} type="button">
          List Of Auction
        </ButtonField>
      </CardField>
    </>
  );
};

export default ProductDetailInfo;
