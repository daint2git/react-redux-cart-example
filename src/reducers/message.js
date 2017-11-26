import * as Types from 'ConstantsPath/ActionType';
import * as ConstantMessage from 'ConstantsPath/Message';

var initialState = ConstantMessage.MSG_WELCOME;

const message = (state = initialState, action) => {

  let { product, quantity } = action;

  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message;

    default:
      return state
  }
}

export default message;