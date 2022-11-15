import React, { useContext } from "react";
import { Icon16, TitleH3 } from "../../style/style";
import styled from "styled-components";
import IClose from "../../assets/icon/icon_close.png";
import { TwoWayButton } from "../../components/Button";
import { AppContext } from "../../context/AppContext";

const RecentList = () => {
  const { recentKeyword, setRecentKeyword } = useContext(AppContext);

  // TODO - ContextAPI - useContext 를 이용해서 전역 데이터를 가져와야 할듯 + store type 설정
  const popKeyword = (keyword: string) => {
    const storage = localStorage.getItem("recentKeyword");

    if (storage) {
      const arr = JSON.parse(storage);
      const filter = arr.filter((item: string) => item !== keyword);
      localStorage.setItem("recentKeyword", JSON.stringify(filter));
      setRecentKeyword(filter);
    }
  };

  // reverse 는 원본배열을 수정한다. copy 배열을 사용.
  if (recentKeyword.length > 0) {
    const reverseList = [...recentKeyword].reverse();

    return (
      <Wrapper>
        <TitleH3>최근에 검색했어요</TitleH3>
        <Ul>
          {reverseList.map((keyword: string, index: number) => {
            return (
              <TwoWayButton color={"keyWhite"} round={"md"} text={"labelMd"} key={index}>
                <button type="button">{keyword}</button>
                <button type="button" onClick={() => popKeyword(keyword)}>
                  <Icon16 src={IClose} alt="최근 검색어 삭제" />
                </button>
              </TwoWayButton>
            );
          })}
        </Ul>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <TitleH3>최근에 검색했어요</TitleH3>
      <P>😳 최근 검색어가 없어요</P>
    </Wrapper>
  );
};

export default RecentList;

const Wrapper = styled.section`
  margin-bottom: 20px;
`;

const P = styled.p`
  ${({ theme }) => theme.TEXT.bodyLg};
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  column-gap: 8px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
