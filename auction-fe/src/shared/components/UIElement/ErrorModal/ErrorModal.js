import { Modal } from "@mui/material";
import "./ErrorModal.css";

import ButtonField from "../../FormElement/Button/ButtonField";

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
