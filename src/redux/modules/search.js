import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";


// 액션

const SEARCH_MY_SCHEDULE = 'SEARCH_MY_SCHEDULE'

// 초기값 

const initialState = {}

// 액션 생성 함수

const __searchMySchedule = createAction(SEARCH_MY_SCHEDULE, (search) => ({search}))

// 미들웨어

export const searchMySchedule = (keyword) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    const bucket = {
      headers: { Authorization: `Bearer ${myToken}` },
      params: { keyword : keyword },
    };
    console.log(myToken)
    console.log(bucket)
    axios.get("http://14.34.139.253:3000/api/mySchedule/search", bucket)
    .then((res) => {
      dispatch(__searchMySchedule(res.data));
      console.log("리덕스 콘솔", res.data);
    })
    .catch((err) => {
      console.log("검색하기 에러입니다.: ", err);
    });
  }
}

export default handleActions(
  {
    [SEARCH_MY_SCHEDULE]: (state, action) =>
      produce(state, (draft) => {
        draft.search = action.payload.search;
      }),
  },
  initialState
);