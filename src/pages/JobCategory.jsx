import React, { useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadJobList, loadCategoryList, selectCategory } from '../redux/modules/job';

import backBtn from '../assets/img/icon/Back.png'

// 상세 지역 import
import {Seoul} from "../shared/region";
import {Gyeonggi} from "../shared/region";
import {Incheon} from "../shared/region";
import {Daejeon} from "../shared/region";
import {Sejong} from "../shared/region";
import {Chungnam} from "../shared/region";
import {Chungbuk} from "../shared/region";
import {Gwangju} from "../shared/region";
import {Jeonnam} from "../shared/region";
import {Jeonbuk} from "../shared/region";
import {Daegu} from "../shared/region";
import {Gyeongbuk} from "../shared/region";
import {Busan} from "../shared/region";
import {Ulsan} from "../shared/region";
import {Gyeongnam} from "../shared/region";
import {Gangwon} from "../shared/region";
import {Jeju} from "../shared/region";

// 상세 직군 import
import {경영·사무} from '../shared/jobData';
import {마케팅·광고·홍보} from '../shared/jobData';
import {IT·인터넷} from '../shared/jobData';
import {디자인} from '../shared/jobData';
import {무역·유통} from '../shared/jobData';
import {영업·고객상담} from '../shared/jobData';
import {서비스} from '../shared/jobData';
import {연구개발·설계} from '../shared/jobData';
import {생산·제조} from '../shared/jobData';
import {교육} from '../shared/jobData';
import {건설} from '../shared/jobData';
import {의료} from '../shared/jobData';
import {미디어} from '../shared/jobData';
import {전문·특수직} from '../shared/jobData';

const JobCategory = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [taskToggle, setTaskToggle] = React.useState(false);
  const [workAreaToggle, setworkAreaToggle] = React.useState(false);

  const tasks = [
    '전체',
    "경영·사무",
    '마케팅·광고·홍보',
    'IT·인터넷',
    '디자인',
    '무역·유통',
    '영업·고객상담',
    '서비스',
    '연구개발·설계',
    '생산·제조',
    '교육',
    '건설',
    '의료',
    '미디어',
    '전문·특수직',
  ]
  
  const workArea = [
    '서울', '세종', '광주','대구','부산','제주','경기','충남','전남','경북','울산','강원','인천','대전','충북','전북','경남','전체'
  ]

  const careers = [
    '신입', '경력', '경력무관'
  ]

  const CompanyType = [
    '대기업', '중소/중견기업', '외국계기업', '공기업', '전체',
  ]
  
  const defaultCategory = useSelector((state) => state.job.category.data);
  
  console.log(defaultCategory)

  const [categoryData, setCategoryData] = React.useState({
    'jobMain' : defaultCategory?.jobMain,
    'jobSub' : defaultCategory?.jobSub,
    'cityMain' : defaultCategory?.cityMain,
    'citySub' : defaultCategory?.citySub,
    'career' : defaultCategory?.career,
    'companyType' : defaultCategory?.companyType,
  })
  
  console.log(categoryData)
  
  useEffect(() => {
    dispatch(loadCategoryList());
  }, []);
  
  return (
    <>
      <UpBar>
        <BackBtn src={backBtn} onClick={() => navigate("/job")} />
        <SaveBtn onClick={() => {
          dispatch(selectCategory(categoryData));
          window.alert("수정이 완료되었습니다!");
          navigate("/job")
          }
        }>저장</SaveBtn>
      </UpBar>

      <CategoryTap>
        <div onClick={() => setTaskToggle(!taskToggle)}>직무</div>
        {
          taskToggle === false
          ? 
            <></>
          :
              tasks.map((tasksData, idx)=>{
                return(
                  <JobTags key={idx} onClick={
                    () => setCategoryData({ ...categoryData, 'jobMain' : tasksData, jobSub : '' })
                  }>{tasksData}</JobTags>
                )
              })
        }
      </CategoryTap>

                <CategoryTap>
                  <div onClick={() => setTaskToggle(!taskToggle)}>상세직무</div>
                  <hr />
                  {
                                categoryData.jobMain === "경영·사무"
                                ? 
                                경영·사무.map((workAreaData, idx)=>{
                                    return(
                                      <JobTags key={idx} onClick={
                                        () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                      }>{workAreaData}</JobTags>
                                    )
                                  })
                                  : 
                                  categoryData.jobMain === "마케팅·광고·홍보"
                                  ? 
                                  마케팅·광고·홍보.map((workAreaData, idx)=>{
                                      return(
                                        <JobTags key={idx} onClick={
                                          () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                        }>{workAreaData}</JobTags>
                                      )
                                    })
                                    : 
                                    categoryData.jobMain === "IT·인터넷"
                                    ? 
                                    IT·인터넷.map((workAreaData, idx)=>{
                                        return(
                                          <JobTags key={idx} onClick={
                                            () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                          }>{workAreaData}</JobTags>
                                        )
                                      })
                                      : 
                                      categoryData.jobMain === "디자인"
                                      ? 
                                      디자인.map((workAreaData, idx)=>{
                                          return(
                                            <JobTags key={idx} onClick={
                                              () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                            }>{workAreaData}</JobTags>
                                          )
                                        })
                                        : 
                                        categoryData.jobMain === "무역·유통"
                                        ? 
                                        무역·유통.map((workAreaData, idx)=>{
                                            return(
                                              <JobTags key={idx} onClick={
                                                () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                              }>{workAreaData}</JobTags>
                                            )
                                          })
                                          : 
                                          categoryData.jobMain === "영업·고객상담"
                                          ? 
                                          영업·고객상담.map((workAreaData, idx)=>{
                                              return(
                                                <JobTags key={idx} onClick={
                                                  () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                }>{workAreaData}</JobTags>
                                              )
                                            })
                                            : 
                                            categoryData.jobMain === "서비스"
                                            ? 
                                            서비스.map((workAreaData, idx)=>{
                                                return(
                                                  <JobTags key={idx} onClick={
                                                    () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                  }>{workAreaData}</JobTags>
                                                )
                                              })
                                              : 
                                              categoryData.jobMain === "연구개발·설계"
                                              ? 
                                              연구개발·설계.map((workAreaData, idx)=>{
                                                  return(
                                                    <JobTags key={idx} onClick={
                                                      () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                    }>{workAreaData}</JobTags>
                                                  )
                                                })
                                                : 
                                                categoryData.jobMain === "생산·제조"
                                                ? 
                                                생산·제조.map((workAreaData, idx)=>{
                                                    return(
                                                      <JobTags key={idx} onClick={
                                                        () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                      }>{workAreaData}</JobTags>
                                                    )
                                                  })
                                                  : 
                                                  categoryData.jobMain === "교육"
                                                  ? 
                                                  교육.map((workAreaData, idx)=>{
                                                      return(
                                                        <JobTags key={idx} onClick={
                                                          () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                        }>{workAreaData}</JobTags>
                                                      )
                                                    })
                                                    : 
                                                    categoryData.jobMain === "건설"
                                                    ? 
                                                    건설.map((workAreaData, idx)=>{
                                                        return(
                                                          <JobTags key={idx} onClick={
                                                            () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                          }>{workAreaData}</JobTags>
                                                        )
                                                      })
                                                      : 
                                                      categoryData.jobMain === "의료"
                                                      ? 
                                                      의료.map((workAreaData, idx)=>{
                                                          return(
                                                            <JobTags key={idx} onClick={
                                                              () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                            }>{workAreaData}</JobTags>
                                                          )
                                                        })
                                                        : 
                                                        categoryData.jobMain === "미디어"
                                                        ? 
                                                        미디어.map((workAreaData, idx)=>{
                                                            return(
                                                              <JobTags key={idx} onClick={
                                                                () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                              }>{workAreaData}</JobTags>
                                                            )
                                                          })
                                                          : 
                                                          categoryData.jobMain === "전문·특수직"
                                                          ? 
                                                          전문·특수직.map((workAreaData, idx)=>{
                                                              return(
                                                                <JobTags key={idx} onClick={
                                                                  () => setCategoryData({ ...categoryData, 'jobSub' : workAreaData })
                                                                }>{workAreaData}</JobTags>
                                                              )
                                                            })
                                                            : <></>
                                  
                  }
                </CategoryTap>

      <CategoryTap>
        <div onClick={() => setworkAreaToggle(!workAreaToggle)}>근무지역</div>
        {
          workAreaToggle === false
          ? 
            <></>
          :         
            workArea.map((workAreaData, idx)=>{
              return(
                <JobTags key={idx} onClick={
                  () => setCategoryData({ ...categoryData, 'cityMain' : workAreaData, 'citySub' : "" })
                }>{workAreaData}</JobTags>
              )
            })
        }
      </CategoryTap>


                  <CategoryTap>
                    <div onClick={() => setworkAreaToggle(!workAreaToggle)}>상세지역</div>
                    <hr />
                    {
                      categoryData.cityMain === "서울"
                      ? 
                      Seoul.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :         
                        categoryData.cityMain === "경기"
                        ? 
                        Gyeonggi.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "인천"
                        ?
                        Incheon.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "대전"
                        ?
                        Daejeon.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "세종"
                        ?
                        Sejong.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "충남"
                        ?
                        Chungnam.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "충북"
                        ?
                        Chungbuk.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "광주"
                        ?
                        Gwangju.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "전남"
                        ?
                        Jeonnam.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "전북"
                        ?
                        Jeonbuk.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "대구"
                        ?
                        Daegu.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "경북"
                        ?
                        Gyeongbuk.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "부산"
                        ?
                        Busan.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "울산"
                        ?
                        Ulsan.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "경남"
                        ?
                        Gyeongnam.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "강원"
                        ?
                        Gangwon.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.cityMain === "제주"
                        ?
                        Jeju.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'citySub' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        <></>
                    }
                  </CategoryTap>


      <CategoryTap>
        <div>경력</div>
          {
            careers.map((careersData, idx)=>{
              return(
                <JobTags key={idx} onClick={
                  () => setCategoryData({ ...categoryData, 'career' : careersData })
                }>{careersData}</JobTags>
              )
            })
          }
      </CategoryTap>

      <CategoryTap>
        <div>기업형태</div>
        {  
            CompanyType.map((CompanyTypeData, idx)=>{
              return(
                <JobTags key={idx} onClick={
                  () => setCategoryData({ ...categoryData, 'companyType' : CompanyTypeData })
                }>{CompanyTypeData}</JobTags>
              )
            })
        }
      </CategoryTap>
    </>
  );
};

const UpBar = styled.div`
  width : auto;
  height : 41px;
  background: #3284FF;
  display : inline-block;
  padding : 63px 24px 0px;
  display: flex;
  justify-content: space-between;
`

const BackBtn = styled.img`
width : 14px;
height : 14px;
cursor : pointer;
`

const SaveBtn = styled.div`
font-weight: 700;
font-size: 12.0999px;
color: #FFFFFF;
cursor : pointer;
`

const CategoryTap = styled.div`
  padding : 12px 24px;
`

const JobTagsWrap = styled.div`
  display : inline-block;
  float : right;
  margin : 0 10px 10px 0;
`

const JobTags = styled.div`
  width : auto;
  height : 18px;
  display : inline-block;
  padding : 2px 8px;
  background: orange;
  margin : 5px;
  border-radius : 15px;
  font-size: 14px;
  line-height : 20px;
`

export default JobCategory;