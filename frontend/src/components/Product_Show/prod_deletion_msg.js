import React from 'react';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';


class ProdDeletionModal extends React.Component {
  constructor(props) {
    super(props)
    this.okClickHandle = this.okClickHandle.bind(this);
  }

  okClickHandle() {
    this.props.closeModal()
    this.props.history.push('/products')
  }

  render() {
    let deletionModal;
    if (this.props.type === "success") {
      deletionModal = 
          <label className="prod-deletion-error">
            This product was deleted successfully.
          </label>
    } else if (this.props.type === "error") {
      deletionModal = 
        <label className="prod-deletion-error">
          There was a problem with your request. Please try again.
        </label>  
    }
    return (
      <div className="deletion-modal-container">
        {deletionModal}
        <div
          className="prod-deletion-error-ok"
          onClick={this.okClickHandle}>
          OK
        </div>
      </div>
    )
  }
}

export default withRouter(ProdDeletionModal);