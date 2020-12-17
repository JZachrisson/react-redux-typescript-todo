import * as MyTypes from 'MyTypes';
import { actionTypes } from '../actions/actions';

interface ITodoModel {
  count: number;
  list: string[];
}

export const initialState: ITodoModel = {
  count: 2,
  list: ['Do the laundry', 'Do the dishes'],
};

export const todoReducer = (
  state: ITodoModel = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, action.payload],
      };
    }
    case actionTypes.DELETE: {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {
        ...state,
        count: state.count - 1,
        list: newList,
      };
    }
    default:
      return state;
  }
};
