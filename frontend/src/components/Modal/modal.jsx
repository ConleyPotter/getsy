import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../Session/login_form_container';
import SignupFormContainer from '../Session/signup_form_container';
import ProdDeletionModal from '../Product_Show/prod_deletion_msg';
import './modal.css'

function modalAction({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'deleteSuccess':
      component = <ProdDeletionModal type="success" closeModal={closeModal}/>;
      break;
    case 'deleteError':
      component = <ProdDeletionModal type="error" closeModal={closeModal}/>;
      break
    default:
      return null;
  }

  let modalComponent; 
  if (modal === 'signup' || modal === 'login') {
    modalComponent = 
    <div className="modal-background" onClick={closeModal}>
      < div className="modal-child" onClick={e => e.stopPropagation()} >
        {component}
      </div>
    </div>
  } else {
    modalComponent = 
    <div className="prod-deletion-modal-background" onClick={closeModal}>
      < div className="prod-deletion-modal-child" onClick={e => e.stopPropagation()} >
        {component}
      </div>
    </div>
  }
  return (
    <div>
      {modalComponent}
    </div>
  )
}

const msp = state => {
  return {
    modal: state.modal
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(modalAction);