import Modal from "react-modal";
import styled from "styled-components";

const Modal = ({ isOpen, setIsOpen, contents }) => {
  const overlay = {
    zIndex: "9999",
    backgroundColor: "#00000040",
  };

  return (
    <CustomModal isOpen={isOpen} style={{ overlay }}>
      <ContentWrapper>{contents}</ContentWrapper>
      <BtnWrapper type="button" onClick={() => setIsOpen((prev) => !prev)}>
        확인
      </BtnWrapper>
    </CustomModal>
  );
};

export default Modal;

const ContentWrapper = styled.p`
  padding: 36px 20px 20px 20px;
  ${({ theme }) => theme.TEXT.button12};
  text-align: center;
`;

const CustomModal = styled(Modal)`
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

const BtnWrapper = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  ${({ theme }) => theme.TEXT.button12};
  text-align: center;
  color: #ffffff;
  background-color: ${({ theme }) => theme.COLOR.keyOriginal};
`;
