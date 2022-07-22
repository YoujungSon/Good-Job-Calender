import { produce } from "immer";

const initialState = {
  is_login: null,
};

// action

const ACTIVE_DATE = "date_reducer/ACTIVE_DATE";

// action creator
export function activeDate(payload) {
  return { type: ACTIVE_DATE, payload };
}

//middleware
export const active = (isActive) => {
  return function (dispatch) {
    const data = {
      isActive,
    };
    dispatch(activeDate(data));
  };
};

//reducer
export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_DATE: {
      return produce(state, (draft) => {
        draft.active = action.payload;
      });
    }

    default:
      return state;
  }
}
