import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const button_wrapper_styles = {
  position: "relative",
  zIndex: 1,
};

const other_content_styles = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function PortalDemo() {
  const [isOpen, setOpen] = useState(false);

  return ReactDOM.createPortal(
    <>
      <div style={button_wrapper_styles}>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setOpen(false)}>
          fancy Modal
        </Modal>
      </div>
      <div style={other_content_styles}>Other Content</div>
    </>,
    document.getElementById("portal-root")
  );
}
export default PortalDemo;
