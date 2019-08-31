import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SUCCESS,
} from '../constants';

const initialState = {
  data: [],
  error: '',
  fetching: false,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA: {
      return {
        ...state,
        fetching: true,
      };
    }
    case FETCHING_DATA_SUCCESS: {
      return {
        ...state,
        data: action.data,
        fetching: false,
      };
    }
    case FETCHING_DATA_FAILURE: {
      return {
        ...state,
        error: action.error.message,
        fetching: false,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default apiReducer;
