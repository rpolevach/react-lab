import React, { Component } from "react";

class EditModal extends Component {
  render() {
    const {
      name,
      description,
      id,
      changeSectionIsOpen,
      onEditItemAccepted,
      handleOnChangeName,
      handleOnChangeDesc
    } = this.props;
    return (
      <>
        {changeSectionIsOpen && (
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{id}</div>
              </div>
              <div className="modalBody">
                <input placeholder={name} onChange={handleOnChangeName} />
                <input
                  placeholder={description}
                  onChange={handleOnChangeDesc}
                />
              </div>
              <div className="modalFooter">
                <button onClick={changeSectionIsOpen}>Cancel</button>
                <button onClick={onEditItemAccepted}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default EditModal;
