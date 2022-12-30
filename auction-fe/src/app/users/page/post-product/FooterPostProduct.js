import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";

const FooterPostProduct = ({ steps, handleNextStep, handlePrevStep }) => {
  return (
    <div className="form__step-form-footer">
      {steps > 0 && (
        <ButtonField
          type="button"
          onClick={handlePrevStep}
          className="btn__redirect-form prev"
        >
          Prev Step
        </ButtonField>
      )}

      {steps < 2 && (
        <ButtonField
          type="button"
          onClick={handleNextStep}
          className="btn__redirect-form next"
          dark
        >
          Next Step
        </ButtonField>
      )}
      {steps === 2 && (
        <ButtonField type="submit" className="btn__redirect-form next" dark>
          Submit
        </ButtonField>
      )}
    </div>
  );
};

export default FooterPostProduct;
