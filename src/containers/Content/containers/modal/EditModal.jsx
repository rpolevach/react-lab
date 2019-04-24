import React, { Component } from "react";

class EditModal extends Component {
  render() {
    const { name, description, id, changeSectionIsOpen } = this.props;
    return (
      <>
        {changeSectionIsOpen && (
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{id}</div>
              </div>
              <div className="modalBody">
                <input value={name} />
                <input value={description} />
              </div>
              <div className="modalFooter">
                <button>Cancel</button>
                <button>Submit</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default EditModal;
