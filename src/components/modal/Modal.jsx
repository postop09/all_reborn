import * as S from "./Modal.style";

const Modal = ({ isOpen, setIsOpen, contents }) => {
  const overlay = {
    zIndex: "9999",
    backgroundColor: "#00000040",
  };

  return (
    <S.CustomModal isOpen={isOpen} style={{ overlay }}>
      <S.ContentWrapper>{contents}</S.ContentWrapper>
      <S.BtnWrapper type="button" onClick={() => setIsOpen((prev) => !prev)}>
        확인
      </S.BtnWrapper>
    </S.CustomModal>
  );
};

export default Modal;
