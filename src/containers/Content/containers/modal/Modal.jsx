import React from "react";
import PropTypes from "prop-types";
import "../../styled/Modal.css";

class Modal extends React.Component {
  render() {
    const { onAddGood, onChange, onClose } = this.props;

    return (
      <div className="ordModal">
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">Create a good</div>
            </div>
            <div className="modalBody">
              <div>
                <input placeholder="name" name="name" onChange={onChange} />
              </div>
              <div>
                <input
                  placeholder="description"
                  name="description"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="modalFooter">
              <button onClick={onClose}>Cancel</button>
              <button onClick={onAddGood}>Submit</button>
            </div>
          </div>
        </div>
      </div>
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
  onSubmit: () => {}
};

export default Modal;
