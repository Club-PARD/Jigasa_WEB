<p align="center">
  <img width="40%" src="https://github.com/Club-PARD/Hanmadi_WEB/assets/143365441/7bfec7dc-d9c1-4699-acc0-6e903f2992c8">
</p>
<h1 align="center">🪵 WE are Namukkun 🪵</h1> 
<h4 align="center"> 🌊 Hanmadi FrontEnd Repo 🌊</h4> 

<p align="center">
  <a>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" alt="React">
  </a>
  <a>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
  </a>  
  <a>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" alt="aws">
  </a>
  <a>
    <img src="https://img.shields.io/badge/html5-E34F26?style=flat-flat&logo=html5&logoColor=white">
  </a>
</p>


<p align="center">
  <img width="50%" src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/83900d5e-74b8-4b19-90c4-3f9f28663607">
</p>

<br />

---

## Service Introduction

### 지역개발사업에 대한 의견을 전달할 수 있도록, 용기를 주는 커뮤니티 서비스, 한마디 💭

** 67.6% **의 주민들이 지역 개발 사업에 대한 본인의 의견을 전달하고 싶었던 적이 있었지만 <br /> **실제로 전달한 적이 없다**고 답했습니다.

그 이유는 “**본인의 의견이 실제로 반영될지 불확실해서”** 였습니다.

**💬 As-Is**

1. 자신의 의견이 어디까지나 소수의 의견이라고 생각한다.
2. 자신의 의견이 옳은 지에 대한 확신이 없다.

**💬 To-Be**

1. 자신의 의견에 공감하는 사람들이 많다는 것을 알 수 있다.
2. 자신의 의견에 확신을 얻거나 더 나은 방향으로 수정할 수 있다.

## Function

### **1. 의견 업로드 기능 💡**

> 제안 게시판에서 지역 개발 사업에 대한 자신의 의견을 제안할 수 있습니다.  
> EX) “우리 지역에 OO시설이 생겼으면 좋겠어요”

1. 제안 배경/ 해결 방안/ 기대 효과의 형식에 맞춰 제안 글을 작성합니다.
2. 첨부 파일을 통해, 자신의 제안 글을 더욱 더 이해하기 쉽도록 합니다.

### **2. 추천하기 기능 👍**

> 누군가 제안한 의견 중 공감 가는 의견에 추천을 보내어, 글쓴이에게 용기를 줄 수 있습니다. 용기를 얻은 글쓴이들이 직접 국민신문고에 자신의 의견을 전달할 수 있도록, 동기부여를 제공합니다.

### **3. 댓글 기능 💬**

> 공감 가는 제안 글에 자신의 의견을 댓글로 추가할 수 있습니다. 글쓴이는 댓글을 통해서, 더 나은 의견을 만들어나갈 수 있습니다.  
> EX) “저도 포항 사는 사람인데, 포항역세권개발은 꼭 필요하다고 생각합니다!”

1. 글쓴이는 댓글 중 마음에 드는 의견을 채택할 수 있습니다.
2. 채택된 댓글은 포스트잇으로 게시글 옆에 고정됩니다.

---

# 🗃️ 화면 구성

### [로그인 전 화면]
![img](https://github.com/user-attachments/assets/ef7a1018-cda3-49da-9406-62ce72fdfa52)
+ 기존에 없던 사이트이기에, 온보딩 페이지가 필요했습니다. <br>회원가입, 로그인 전에 '한마디' 사이트를 소개하고 어떤식으로 사용해야하는지 알려주는 페이지 입니다.

  - 회원가입을 한 적 있는 경우: '카카오계정 로그인', '의견 제안하기', 지역 게시판 버튼을 누르면, 해당 페이지로 이동합니다.
  - 회원가입을 한 적 없는 경우: '카카오계정 로그인', '의견 제안하기' 버튼을 누르면, 카카오로그인 페이지로, 지역 게시판 버튼을 누르면, 해당 게시판으로 이동합니다.

### [메인페이지]
![img](https://github.com/user-attachments/assets/5de08414-62ee-45de-ab67-f4a342a1e9f1)
+ 의견 제안하기 버튼을 보여줍니다.
+ 스크롤을 내리면, 인기있는 제안과, 자신이 회원가입하면서 골랐던 지역의 게시글을 보여줍니다.

### [글쓰기 페이지]
![img](https://github.com/user-attachments/assets/59aac21e-6199-446d-a679-aaa2e0d41138)
+ 자신이 의견을 제안하고자하는 지역을 선택합니다. 
+ 자신의 의견의 제목, 제안배경, 해결방안, 기대효과를 모두 입력해야만, '게시하기'버튼이 활성화되어 게시할 수 있습니다.
+ 각 텍스트 박스마다 이미지를 첨부할 수 있습니다. 그리고 첨부파일은 필요하다면, 첨부할 수 있습니다. 
+ 만약 글을 쓰다가 막힌다면, '임시저장' 버튼을 누르고 임시저장할 수 있습니다.

### [글 상세 페이지]
![img](https://github.com/user-attachments/assets/aa5beb30-8050-43b4-be28-5cc4e2065b41)
+ 해당 게시글의 제목, 게시날짜, 댓글 수, 추천 수가 상단에 나옵니다.
+ 제안배경, 해결방안, 기대효과 순으로 나옵니다. 
+ 맨 아래, '추천하기'버튼과 댓글을 작성할 수 있는 공간이 있습니다.
+ 만약 게시글 작성자가 댓글을 채택한다면, 사진의 우측에 나오는 포스트잇과 같이 붙여둘 수 있습니다.
+ 그리고 해당 포스트잇은 글 작성자에 한해서 자유롭게 옮길 수 있습니다.

### [제안게시판]
![img](https://github.com/user-attachments/assets/863b7bf1-feef-44b8-ab17-15679ffe87b6)
+ 자신이 보고싶은 지역을 선택해서 해당 지역들에 올라와있는 제안들을 확인할 수 있습니다.
+ 최신순, 인기순에 따라서 게시글을 확인할 수 있습니다.

### [마이 페이지]
![img](https://github.com/user-attachments/assets/858b0008-1d17-4caa-8fd1-95872cb96c02)
+ 자신의 개인정보를 수정할 수 있습니다.
+ 자신의 의견 중, 진행중인 의견, 종료된 의견, 임시저장된 의견 수를 확인할 수 있습니다.
+ 자신의 의견을 수정 및 삭제할 수 있습니다.
+ 우측의 국민신문고 버튼을 통해서, 자신의 의견을 공식적으로 제출하기 위해서 이동할 수 있습니다.

---

# 📥라이브러리

+ npm install react-router-dom
+ npm install styled-components
+ npm install axios
+ npm install recoil
+ npm install react-quill
+ npm install react-slick --save
+ npm install slick-carousel --save
+ npm install react-draggable

---

### 커밋 메시지 규칙

```text
[Feat]     : 새로운 기능 추가

[Fix]      : 버그 수정

[Docs]     : 문서 수정

[Style]    : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우

[Refactor] : 코드 리팩토링

[Test]     : 테스트 코드, 리팩토링 테스트 코드 추가

[Chore]    : 패키지 매니저 수정, 그 외 기타 수정 ex).gitignore

[Design]   : CSS 등 사용자 UI 디자인 변경

[Comment]  : 필요한 주석 추가 및 변경

[Rename]   : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우

[Remove]   : 파일을 삭제하는 작업만 수행한 경우

[!HOTFIX]  : 급하게 치명적인 버그를 고쳐야 하는 경우
```

---

# 기술 스텍

### FrontEnd

![bedge](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white)
![bedge](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white)
![bedge](https://img.shields.io/badge/Recoil-3578E5?style=flat&logo=Recoil&logoColor=white)
![bedge](https://img.shields.io/badge/StyledComponents-DB7093?style=flat&logo=styledcomponents&logoColor=white)<br>
![bedge](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white)
![bedge](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white)

### BackEnd

![bedge](https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=springboot&logoColor=white)
![bedge](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white)
![bedge](https://img.shields.io/badge/JAVA-ED8B00?style=flat&logo=Openjdk&logoColor=white)

### 사이트 배포
![bedge](https://img.shields.io/badge/AWS-232F3E.svg?style=flat&logo=amazonwebservices&logoColor=white)
![bedge](https://img.shields.io/badge/AmazonRoute53-8C4FFF?style=flat&logo=AmazonRoute53&logoColor=white)
![bedge](https://img.shields.io/badge/AmazonEC2-FF9900?style=flat&logo=amazonec2&logoColor=white)<br />
![bedge](https://img.shields.io/badge/AmazonS3-569A31?style=flat&logo=amazonS3&logoColor=white)
![bedge](https://img.shields.io/badge/AmazonRDS-527FFF?style=flat&logo=amazonrds&logoColor=white)

### 협업도구
![bedge](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white)
![bedge](https://img.shields.io/badge/Notion-FFFFFF?style=flat&logo=notion&logoColor=black)
![bedge](https://img.shields.io/badge/Discord-blue?style=flat&logo=discord&logoColor=white)
![bedge](https://img.shields.io/badge/slack-FFFFFF?style=flat&logo=slack&logoColor=skyblue)<br />
![bedge](https://img.shields.io/badge/git-black?style=flat&logo=git&logoColor=red)
![bedge](https://img.shields.io/badge/github-black?style=flat&logo=github&logoColor=white)

# 🌲 나무꾼들

> 🌊[@namukkun8](https://www.instagram.com/namukkun8/)🌊

|                                                               **[이유현](https://github.com/LYH513)**                                                               |                                                              **[이온유](https://github.com/ROWELLI)**                                                               |                                                               [임성빈](https://github.com/seongkong)                                                                |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                             프론트 개발자                                                                              |                                                                             프론트 개발자                                                                              |                                                                             프론트 개발자                                                                              |                                                                                                               |                                                                  |
| <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/89fbed5c-b1e7-4227-89d5-9c3d29f590f1" style="width: 140px; height: 150px; object-fit: cover;"> | <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/e7ebb29f-1310-402e-bb13-b9ef208e8c81" style="width: 135px; height: 140px; object-fit: cover;"> | <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/f1a39a0f-218a-42b8-8159-17298dfaab5c" style="width: 135px; height: 140px; object-fit: cover;"> |

<br />

|                                                             **[이한결](https://github.com/leehan416)**                                                              |                                                          **[박준현](https://github.com/ParkJunhyun0304)**                                                           |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                             백엔드 개발자                                                                              |                                                                             백엔드 개발자                                                                              |
| <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/59ddfbb0-a407-4f76-adf8-3f0997fd789e" style="width: 140px; height: 150px; object-fit: cover;"> | <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/a2ec2d01-09f9-4c6d-bb6d-8070835b9a5c" style="width: 135px; height: 140px; object-fit: cover;"> |

<br />

|                                                         **[한지훈](https://www.instagram.com/njr07_hjh/)**                                                          |                                                          **[이가연](https://www.instagram.com/gxyeon__/)**                                                          |                                                           **[김영채](https://www.instagram.com/147ck_/)**                                                           |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                                PM                                                                                |                                                                               기획자                                                                                |                                                                               디자이너                                                                               |
| <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/75c4ee55-8fc6-4211-a320-4a3c7d4aaee1" style="width: 140px; height: 150px; object-fit: cover;"> | <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/bfec72ee-49fc-429e-8f85-5d5fc08ce5dc" style="width: 135px; height: 140px; object-fit: cover;"> | <img src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/0780b2e3-3868-4619-9173-89df2983bc39" style="width: 135px; height: 140px; object-fit: cover;"> |

---
[프로젝트 및 팀소개 페이지](https://boggy-ticket-cde.notion.site/Namukkun-f28e9c28f6cb4bb0be6368d6fb889096?pvs=4)

[API 명세서](https://boggy-ticket-cde.notion.site/Namukkun-f28e9c28f6cb4bb0be6368d6fb889096?pvs=4)

[서비스 홈페이지](https://hanmadi.site)

> **Pat It Forward** </br>
>
> <p align="center">
>   <img width="100%", src="https://github.com/Club-PARD/Hanmadi_BE/assets/35258105/335df531-4be4-4441-bec5-0a567a5b3af6">
> <p/>

----
