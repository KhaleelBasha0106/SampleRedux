import { ActionType } from "../constants/ActionTypes";

const initialState = {
    value: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.INCREMENT:
        return { ...state, value: state.value + 1 };
      case ActionType.DECREMENT:
        if(state.value > 0){
            return { ...state, value: state.value - 1 };
        }else{
            return state;
        }
      default:
        return state;
    }
  };
  
  export default counterReducer;