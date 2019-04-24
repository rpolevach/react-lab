import React from "react";
import PropTypes from "prop-types";
import Portal from "./components/Portal";

class Modal extends React.Component {
  state = {
    name: "",
    description: ""
  };

  handleCloseAddGoodModal = () => {
    this.props.onClose();
  };

  render() {
    const {
      handleInputNameChange,
      handleInputDescChange,
      handleAddGood
    } = this.props;

    return (
      <>
        {this.props.isOpen && (
          <Portal>
            <div className="modalOverlay">
              <div className="modalWindow">
                <div className="modalHeader">
                  <div className="modalTitle">{this.props.title}</div>
                </div>
                <div className="modalBody">
                  <input placeholder="name" onChange={handleInputNameChange} />
                  <input
                    placeholder="description"
                    onChange={handleInputDescChange}
                    // onKeyPress={this.handleAddGood}
                  />
                </div>
                <div className="modalFooter">
                  <button onClick={this.handleCloseAddGoodModal}>Cancel</button>
                  <button onClick={() => handleAddGood({ key: "Enter" })}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: "Title",
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null
};

export default Modal;
