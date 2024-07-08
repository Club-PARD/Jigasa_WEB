import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyle } from '../../Assets/Style/theme';
import mypageduck from '../../Assets/Img/mypageduck.svg';
import uploadarrow from '../../Assets/Img/uploadarrow.svg';
import arrowleft from '../../Assets/Img/Arrowleft.svg';
import arrowright from '../../Assets/Img/Arrowright.svg';

// 진행중인 한마디 전체를 보여주도록 돕는 컴포넌트
function IngAllPost({ posts }) {
  const [page, setPage] = useState(1); // 페이지 초기값을 1로 설정
  const url = "https://www.epeople.go.kr/index.jsp";

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const itemsPerPage = 8; // 한 페이지당 보여지는 컨텐츠 갯수
  // 총 페이지 갯수
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // 현재 페이지에 해당하는 포스트들
  const currentPosts = posts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // 페이지 변경 핸들러
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <IngContainer>
          <TotalIngContainer>
            <TotalTitleContainer>
              <img src={mypageduck} style={{ width: '28.551px', height: '25.232px' }} alt="duck" />
              진행중인 한마디
            </TotalTitleContainer>
            <TotalContentContainer>
              <AllContentContainer>
                {currentPosts.map(post => (
                  <ContentContainer key={post.postId}>
                    <TitleInfoContainer>
                      <TitleFunctionContainer>
                        <IngButton>진행중</IngButton>
                        <ContentTitle>{truncateText(post.title, 11)}</ContentTitle>
                        <AdviseButton>수정</AdviseButton>
                        <DeleteButton>삭제</DeleteButton>
                      </TitleFunctionContainer>
                      <InfoContainer>
                        <InfoTextContainer>
                          <InfoText>용길이 수</InfoText>
                          <InfoText>{post.upCountPost}</InfoText>
                        </InfoTextContainer>
                        <InfoTextContainer>
                          <InfoText>한마디 수</InfoText>
                          <InfoText>{post.postitCount}</InfoText>
                        </InfoTextContainer>
                        <InfoTextContainer>
                          <InfoText>남은 기간</InfoText>
                          <InfoText>{post.deadline}</InfoText>
                        </InfoTextContainer>
                        <InfoTextContainer>
                          <InfoText>작성일자</InfoText>
                          <InfoText>{post.postTime}</InfoText>
                        </InfoTextContainer>
                      </InfoContainer>
                    </TitleInfoContainer>
                    <UploadButton onClick={() => { window.open(url) }}>
                      국민신문고
                      <img src={uploadarrow} style={{ width: '14.4px', height: '4.9px' }} alt="upload arrow" />
                    </UploadButton>
                  </ContentContainer>
                ))}
              </AllContentContainer>
            </TotalContentContainer>

            
            <Pagenation>
            <PagenationButton onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
              <img src={arrowleft} alt="Previous page" />
            </PagenationButton>
            {[...Array(totalPages)].map((_, i) => (
              <PagenationButton key={i} onClick={() => handleChangePage(i + 1)} isSelected={page === i + 1}>
                {i + 1}
              </PagenationButton>
            ))}
            <PagenationButton onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>
              <img src={arrowright} alt="Next page" />
            </PagenationButton>
          </Pagenation>
          </TotalIngContainer>
        </IngContainer>
      </Container>
    </>
  );
}

export default IngAllPost;

const Container = styled.div`
  width: 100%;
  display: flex;
  background: #FAFAFA;
  justify-content: center;
`;

const IngContainer = styled.div`
  width: 920px;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 오른쪽 정렬 */
  /* justify-content: center; */
`;

const TotalIngContainer = styled.div`
  width: 708px;
  display: flex;
  border-top: 0.849px solid #DBDBDB;
  flex-direction: column;
`;

const TotalTitleContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 35px;
  display: flex;
  width: 100%;
  gap: 7px;
  color: #191919;
  font-family: 'MinSans-Regular';
  font-size: 22.189px;
  font-style: normal;
  font-weight: 600;
  flex-direction: row;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const TotalContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-direction: column;
  gap: 14px;
  align-items: flex-end; /* 오른쪽 정렬 */
`;

const AllContentContainer = styled.div`
  display: flex;
  width: 680px;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid var(--gray-001, #E0E0E0);
  border-bottom: 1px solid var(--gray-001, #E0E0E0);
`;

const ContentTitle = styled.div`
  display: flex;
  width: 152px;
  flex-direction: column;
  justify-content: center;
  color: var(--gray-006, #575757);
  font-family: 'MinSans-Regular';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const IngButton = styled.button`
  display: flex;
  width: 42px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: var(--Main-002, #E5F1CA);
  font-family: 'MinSans-Regular';
  color: var(--gray-006, #575757);
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  border: none;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const AdviseButton = styled.button`
  display: flex;
  width: 38px;
  height: 20px;
  padding: 5.849px;
  justify-content: center;
  align-items: center;
  gap: 5.849px;
  border-radius: var(--Corner-Extra-small, 4px);
  background: var(--white-006, #E8E8E8);
  border: none;
  color: var(--gray-005, #707070);
  text-align: center;
  font-family: 'MinSans-Regular';
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const DeleteButton = styled.button`
  display: flex;
  width: 38px;
  height: 20px;
  padding: 5.849px;
  justify-content: center;
  align-items: center;
  gap: 5.849px;
  border-radius: var(--Corner-Extra-small, 4px);
  background: rgba(0, 90, 255, 0.06);
  border: none;
  color: var(--Main-001, #005AFF);
  text-align: center;
  font-family: 'MinSans-Regular';
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const UploadButton = styled.button`
  display: flex;
  width: 118px;
  height: 70px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--Corner-Extra-small, 4px);
  border: 1px solid var(--Main-001, #005AFF);
  background: rgba(0, 90, 255, 0.06);
  color: var(--Main-001, #005AFF);
  text-align: center;
  font-family: 'MinSans-Regular';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const TitleFunctionContainer = styled.div`
  display: flex;
  align-items: center; /* 중앙 정렬 */
  gap: 10px; /* 요소 간격 추가 */
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const InfoTextContainer = styled.div`
  display: flex;
  width: 56px;
  height: 35px;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  border-radius: var(--Corner-Extra-small, 4px);
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const InfoContainer = styled.div`
  padding-top: 15.5px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 16px;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const InfoText = styled.div`
  color: var(--gray-006, #575757);
  font-family: 'MinSans-Regular';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

const TitleInfoContainer = styled.div`
  width: 328px;
  white-space: nowrap; /* 줄 바꿈 방지 */
`;


const Pagenation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 69px;
  margin-bottom: 63px;
  gap: 10px;
`;

const PagenationButton = styled.button`
  display: flex;
  width: 31px;
  height: 31px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;

  border-radius: var(--Corner-Full, 1000px);
  background-color: ${(props) => (props.isSelected ? '#F5F5F5' : 'transparent')};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;