import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 20px;
`;

export const P = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  column-gap: 8px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;