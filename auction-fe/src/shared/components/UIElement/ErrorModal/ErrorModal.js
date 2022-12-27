import ButtonField from "../../FormElement/Button/ButtonField";
import Modal from "../Modal";

const ErrorModal = ({ onClear, error, children }) => {
  return (
    <Modal
      onCancel={onClear}
      header="An Error Occurred!"
      show={!!error}
      footer={
        <ButtonField onClick={onClear} danger>
          OK
        </ButtonField>
      }
    >
      {error}
    </Modal>
  );
};

export default ErrorModal;
