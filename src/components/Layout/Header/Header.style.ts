import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  box-shadow: 0px 5px 7px 2px #00000020;
  width: 100%;
  max-width: 428px;
  background: white;
  z-index: 1000;
`;

export const HiddenTitle = styled.h1`
  ${({ theme }) => theme.TEXT.hide};
`;

export const ImgTitle = styled.img`
  width: 110px;
  height: 30px;
`;

export const TxtTitle = styled.h2`
  ${({ theme }) => theme.TEXT.header20}
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

export const LiSearch = styled.li`
  width: 100%;
  margin-left: 8px;

  form {
    position: relative;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
  }

  label {
    ${({ theme }) => theme.TEXT.hide};
  }

  input {
    display: block;
    border: none;
    border-radius: ${({ theme }) => theme.ROUND.md};
    background: ${({ theme }) => theme.COLOR.keyWhite};
    width: 100%;
    padding: 10px 16px 10px calc(16px + 16px + 8px);
    ${({ theme }) => theme.TEXT.label12}
  }
`;