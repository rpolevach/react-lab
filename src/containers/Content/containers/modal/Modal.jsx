import React from "react";
import PropTypes from "prop-types";
import Portal from "./components/Portal";

class Modal extends React.Component {
  state = {
    name: "",
    description: ""
  };

  handleInputNameChange = ({ target: { value } }) =>
    this.setState({
      name: value
    });

  handleInputDescChange = ({ target: { value } }) =>
    this.setState({
      description: value
    });

  handleAddGood = ({ key }) => {
    console.log(this.props.state);
    const { name, description } = this.state;
    const { goods, addGood } = this.props;
    let id = 1;

    if (goods.length != 0) {
      id = goods[goods.length - 1].id + 1;
    }

    if (name.length > 1 && description.length > 5 && key === "Enter") {
      addGood(id, name, description);

      this.setState({
        name: "",
        description: ""
      });
    }
  };

  handleCloseAddGoodModal = () => {
    this.props.onClose();
  };

  render() {
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
                  <input
                    placeholder="name"
                    onChange={this.handleInputNameChange}
                  />
                  <input
                    placeholder="description"
                    onChange={this.handleInputDescChange}
                    onKeyPress={this.handleAddGood}
                  />
                </div>
                <div className="modalFooter">
                  <button onClick={this.handleCloseAddGoodModal}>Cancel</button>
                  <button onClick={() => this.handleAddGood({ key: "Enter" })}>
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
