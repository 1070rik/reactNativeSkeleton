import {FETCHING_DATA} from '../constants';

export function fetchData(kind) {
  return {
    type: FETCHING_DATA,
    kind,
  };
};
