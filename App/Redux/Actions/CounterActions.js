import {DECREMENTING_COUNT, INCREMENTING_COUNT} from '../constants';

export function incrementCount() {
  return {
    type: INCREMENTING_COUNT,
  };
}

export function decrementCount() {
  return {
    type: DECREMENTING_COUNT,
  };
}
