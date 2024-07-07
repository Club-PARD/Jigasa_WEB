import { atom } from "recoil";

//recoil Atom 관리 파일

//listall / list 이동을 위함
export const stateListCategory = atom({
  key : 'stateListCategory',
  default: "recent"
});

//페이지네이션 이동
export const pagenation = atom({
  key : 'pagenation',
  default: 1
});

export const fileState = atom({
  key: 'fileState',
  default: [],
});

// 로그인 테스트 
export const loginTestState = atom({
  key: 'loginTestState',
  default: false,
});

//서버에서 가져온 유저 정보 로컬스토리지에 저장
export const userinfo = atom({
  key : 'userinfo',
  default:
    {
      nickName: "",
      local: 0,
      profileImage: "",
      postUpList: [
      ],
      commentUpList: [
      ]
    },

  effects: [
      ({setSelf, onSet}) => {
          const saveSessionData =localStorage.getItem("userData");
          if(saveSessionData){
              setSelf(JSON.parse(saveSessionData));
          }

          onSet((newValue, _, isReset) =>{
              isReset
              ? localStorage.removeItem("userData")
              : localStorage.setItem("userData", JSON.stringify(newValue));
          })
      }
  ]
});

//포스트 좋아요 버튼 상태
export const postLikeBtn = atom({
  key: 'postLikeBtn',
  default: {},
});