import { ACTIONS } from "./pageTypes";

export const setActivePage = (payload) => {
  return {
    type: ACTIONS.SET_ACTIVE_PAGE,
    payload: payload,
  };
};
