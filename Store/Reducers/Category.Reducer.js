import { Games } from "../../Data/Games";
import { SELECT_CATEGORY } from '../Actions/Category.Action';

const INITIAL_STATE = {
  list: Games,
  selected: null,
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const categoryIndex = state.list.findIndex(cat => cat.id === action.categoryID)
      if (categoryIndex === -1) return { ...state };
      return {
        ...state,
        selected: state.list[categoryIndex],
      };
    default:
      return { ...state };
  }
}

export default CategoryReducer;