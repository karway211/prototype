import catsData from "../api/api";

const initialState = {
  catFoods: []
}

const foodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SN/FOODS/SET_FOODS': {
      return { ...state, catFoods: action.catFoods }
    }
    default: {
      return state;
    }
  }
}

const actions = {
  setFoods: (catFoods) => ({ type: 'SN/FOODS/SET_FOODS', catFoods })
}

export const getFoods = () => dispatch => {
  dispatch(actions.setFoods(catsData));
}

export default foodsReducer;
