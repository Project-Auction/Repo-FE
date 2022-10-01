import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal__main ${props.className}`}>
      <header className={`modal__main-header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>

      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={`modal__main-content ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className={`modal__main-footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hooks"));
};

function Modal(props) {
  return (
    <>
      {props.show && <Backdrop onClick={props.onClear} />}

      <CSSTransition
        in={props.show}
        timeout={400}
        classNames="modal__main"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
}

export default Modal;
