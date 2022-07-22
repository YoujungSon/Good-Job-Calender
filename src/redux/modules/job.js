import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// 액션
const LOAD_JOB_LIST = "LOAD_JOB_LIST";
const LOAD_CATEGORY_LIST = "LOAD_CATEGORY_LIST";
const SELECT_CATEGORY = "SELECT_CATEGORY";
const LOAD_JOB_DETAILS = 'LOAD_JOB_DETAILS';
const ADD_SCRAP = 'ADD_SCRAP';

// 초기값
const initialState = {
  job: [],
  category: [],
  select: [],
  list: {
    data : []
  },
  details : {
    career : "",
    city : "",
    companyName : "",
    companyType : "",
    deadline : "",
    job : [],
    title : "",
    url : ""
  },
  scrap : []
};

// 액션 생성 함수
const __loadJobList = createAction(LOAD_JOB_LIST, (list) => ({ list }));
const __loadCategoryList = createAction(LOAD_CATEGORY_LIST, (category) => ({
  category,
}));
const __selectCategory = createAction(SELECT_CATEGORY, (categoryData) => ({
  categoryData,
}));
const __loadJobDetails = createAction(LOAD_JOB_DETAILS, (details) => ({details}));
const __addScrap = createAction(ADD_SCRAP, (postingId) => ({postingId}))

// 미들웨어

// 추천채용 불러오기
export const loadJobList = () => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    console.log(myToken);
    axios
      .get("http://14.34.139.253:3000/api/posting", {
        headers: { Authorization: `Bearer ${myToken}` },
      })
      .then((res) => {
        dispatch(__loadJobList(res.data));
        console.log("리덕스 콘솔 1", res.data);
      })
      .catch((err) => {
        console.log("추천채용 불러오기 에러입니다.: ", err);
      });
  };
};

// 추천채용 카테고리별 불러오기
export const loadCategoryList = () => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    axios
      .get("http://14.34.139.253:3000/api/posting/category", {
        headers: { Authorization: `Bearer ${myToken}` },
      })
      .then((res) => {
        dispatch(__loadCategoryList(res.data));
        console.log("리덕스 콘솔 2", res.data);
      })
      .catch((err) => {
        console.log("추천채용 카테고리별 불러오기 에러입니다.: ", err);
      });
  };
};

// 추천채용 카테고리 선택하기
export const selectCategory = (categoryData) => {
  console.log(categoryData);
  return function (dispatch, getState) {
    if (!categoryData) {
      window.alert("companyType이 없습니다!");
    }
    const myToken = getCookie("token");
    axios({
      method: "patch",
      url: "http://14.34.139.253:3000/api/posting/category",
      data: categoryData,
      headers: { Authorization: `Bearer ${myToken}` },
    })
      .then((res) => {
        dispatch(__selectCategory(res.data));
      })
      .catch((err) => {
        console.log("카테고리 선택 에러 : ", err);
      });
  };
};

// 추천채용 상세 페이지 보기
export const loadJobDetails = (postingId) => {
  return function (dispatch, getState) {
    const myToken = getCookie("token");
    console.log(myToken);
    axios
      .get(`http://14.34.139.253:3000/api/posting/${postingId}`, {
        headers: { Authorization: `Bearer ${myToken}` },
      })
      .then((res) => {
        dispatch(__loadJobDetails(res.data));
        console.log("리덕스 콘솔 3", res.data);
      })
      .catch((err) => {
        console.log("추천채용 디테일 페이지 불러오기 에러입니다.: ", err);
      });
  };
};

// todo 추가 미들웨어
export const addScrap = (postingId) => {
  return function (dispatch, getState) {
    if(!postingId) {window.alert("postingId가 없습니다!")}
    const myToken = getCookie("token");
    axios({
      method: "post",
      url: `http://14.34.139.253:3000/api/schedule/scrap`,
      data: {
        postingId : postingId,
      },
      headers: { Authorization: `Bearer ${myToken}` },
    })
    .then(() => {
      dispatch(__addScrap(postingId));
      window.alert('스크랩이 완료되었어요!')
    })
    .catch((err) => {
      console.log("스크랩 추가 에러: ", err)
      window.alert('이미 스크랩이 완료된 게시물입니다!')
    })
  }
}

// 리듀서
export default handleActions(
  {
    [LOAD_JOB_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [LOAD_CATEGORY_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.category = action.payload.category;
      }),
    [LOAD_JOB_DETAILS]: (state, action) =>
      produce(state, (draft) => {
      draft.details = action.payload.details;
    }),
    // [SELECT_CATEGORY]: (state, action) =>
    //   produce(state, (draft) => {
    //   draft.category = action.payload.category;
    // }),
  },
  initialState
);
