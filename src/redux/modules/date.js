import { produce } from "immer";

const initialState = {
  is_login: null,
};

// action

const SCHEDULE_DATE = "date_reducer/SCHEDULE_DATE";

// action creator
export function scheduleDate(payload) {
  return { type: SCHEDULE_DATE, payload };
}

//middleware

export const schedule = (totalDate, setTotalDate) => {
  return function (dispatch) {
    const data = {
      totalDate,
      setTotalDate,
    };
    dispatch(scheduleDate(data));
  };
};
//reducer
export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case SCHEDULE_DATE: {
      return produce(state, (draft) => {
        draft.date = action.payload;
      });
    }
    default:
      return state;
  }
}
