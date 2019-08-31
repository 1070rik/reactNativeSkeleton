import {DECREMENTING_COUNT_DONE, INCREMENTING_COUNT_DONE} from '../constants';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTING_COUNT_DONE: {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case DECREMENTING_COUNT_DONE: {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default counterReducer;
