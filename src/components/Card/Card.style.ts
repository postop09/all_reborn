import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 4px;
  min-width: 280px;
  background-color: white;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5px 4px 12.5px 8px;
  word-break: keep-all;
`;

export const TxtContents = styled.p`
  ${({ theme }) => theme.TEXT.body14}
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const LikeBtn = styled.button`
  height: fit-content;
  margin: auto 8px 4px auto;
`;