import styled from "styled-components";

export const TxtWrapper = styled.p`
  ${({ theme }) => theme.TEXT.body16};
  text-align: center;

  strong {
    display: block;
    margin-bottom: 16px;
  }

  span {
    display: block;
  }
`;

export const Ul = styled.ul`
  display: flex;
  column-gap: 10px;
  padding: 12px 0 0px;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;