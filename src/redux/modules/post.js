import { produce } from "immer";
import { deleteCookie, setCookie, getCookie } from "./../../shared/Cookie";
import axios from "axios";

// initialState
const initialState = {
  image: "",
  companyName: "",
  title: "",
  sticker: "",
  date: "",
  place: "",
  memo: "",
  is_login: null,
};

// action
const SCHEDULE_POST = "post_reducer/SCHEDULE_POST";

// action creator
export function schedulePost(payload) {
  return { type: SCHEDULE_POST, payload };
}

//middleware

//개인일정 작성
export const SchduleDB = (payload) => {
  console.log(payload);
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    axios({
      method: "post",
      url: "http://14.34.139.253:3000/api/schedule",
      data: payload,
      headers: { Authorization: `Bearer ${myToken}` },
    })
      .then((res) => {
        dispatch(schedulePost(res.payload));
      })
      .catch((err) => {
        console.log("카테고리 선택 에러 : ", err);
      });
  };
};

//reducer
export default function postReducer(state = initialState, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case SCHEDULE_POST: {
      return produce(state, (draft) => {
        setCookie("is_login", "true");
        draft.is_login = true;
        draft.post = action.payload;
      });
    }
    default:
      return state;
  }
}
