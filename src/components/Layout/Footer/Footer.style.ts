import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 428px;
  box-shadow: 0px -5px 7px 2px #00000020;
  border-top-left-radius: ${({ theme }) => theme.ROUND.md};
  border-top-right-radius: ${({ theme }) => theme.ROUND.md};
  padding: 10px 0 14px;
  background: white;
  z-index: 900;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ImgNav = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;
