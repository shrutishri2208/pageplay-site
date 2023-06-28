import { ACTIONS } from "./pageTypes";

const initialState = {
  activePage: "page1",
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVE_PAGE:
      return {
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
