import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "../../shared/Cookie";
import axios from "axios";

// initialState
const initialState = {
  startDate: "",
};

// action
const LIST_DETAIL = "schedule_reducer/LIST_DETAIL";
const LIST_DELETE = "schedule_reducer/LIST_DELETE";
const MONTH_LIST = "schedule_reducer/MONTH_LIST";
const DAILY_LIST = "schedule_reducer/DAILY_LIST";

// action creator
export function deletePost(payload) {
  return { type: LIST_DELETE, payload };
}
export function detailPost(payload) {
  return { type: LIST_DETAIL, payload };
}
export function loadMonth(payload) {
  return { type: MONTH_LIST, payload };
}
export function loadDaily(payload) {
  return { type: DAILY_LIST, payload };
}

//middleware

//일정 삭제
export const deleteSchedule = (scheduleId) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
    };
    axios
      .delete(`http://14.34.139.253:3000/api/schedule/${scheduleId}`, data)
      .then((res) => {
        dispatch(deletePost(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
//일정상세 조회
export const detail = (scheduleId) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
    };
    axios
      .get(`http://14.34.139.253:3000/api/schedule/${scheduleId}`, data)
      .then((res) => {
        dispatch(detailPost(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
//월간일정 조회
export const monthList = (payload) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { startDate: payload },
    };
    axios
      .get("http://14.34.139.253:3000/api/schedule/monthly", data)
      .then((res) => {
        dispatch(loadMonth(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
//일간일정 조회
export const dailyList = (payload) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const data = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { startDate: payload },
    };
    axios
      .get("http://14.34.139.253:3000/api/schedule/daily", data)
      .then((res) => {
        dispatch(loadDaily(res.data.data));
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//reducer
export default function scheduleReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case LIST_DELETE: {
      return produce(state, (draft) => {
        draft.delete = action.payload;
      });
    }
    case LIST_DETAIL: {
      return produce(state, (draft) => {
        draft.detail = action.payload;
      });
    }
    case MONTH_LIST: {
      return produce(state, (draft) => {
        draft.month = action.payload;
      });
    }
    case DAILY_LIST: {
      return produce(state, (draft) => {
        draft.daily = action.payload;
      });
    }
    default:
      return state;
  }
}
