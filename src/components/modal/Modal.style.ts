import styled from "styled-components";
import Modal from "./Modal";

export const ContentWrapper = styled.p`
  padding: 36px 20px 20px 20px;
  ${({ theme }) => theme.TEXT.button12};
  text-align: center;
`;

export const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 5px 1px #00000030;
  border-radius: ${({ theme }) => theme.ROUND.md};
  min-width: 310px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const BtnWrapper = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  ${({ theme }) => theme.TEXT.button12};
  text-align: center;
  color: #ffffff;
  background-color: ${({ theme }) => theme.COLOR.keyOriginal};
`;
