import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

type props = {
  opened: boolean;
  onClose: () => void;
  onSubmit?: () => void;
};

type ModalStyle = {
  overlay: {};
  content: {};
};

interface ModalProps extends props {
  children: React.ReactNode | React.ReactNode[];
}

const TestModal = (props: ModalProps) => {
  const { opened, onClose, onSubmit, children } = props;

  return (
    <Modal isOpen={opened} style={modalLayout} preventScroll={true}>
      <HiddenTitle>모달입니다</HiddenTitle>
      <div>
        <Wrapper>{children}</Wrapper>
        <Button type="button" onClick={onSubmit}>
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default TestModal;

const HiddenTitle = styled.h3`
  ${({ theme }) => theme.TEXT.hide};
`;

const Wrapper = styled.div`
  padding: 36px 20px 24px;
  text-align: center;
  ${({ theme }) => theme.TEXT.buttonMd}
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  ${({ theme }) => theme.TEXT.buttonMd};
  color: #ffffff;
  background: ${({ theme }) => theme.COLOR.keyOriginal};
`;

const modalLayout: ModalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    zIndex: 9999,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "80%",
    maxWidth: "320px",
    height: "fit-content",
    padding: "0",
    background: "#ffffff",
    zIndex: 9999,
  },
};
