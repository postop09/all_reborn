import Modal from "react-modal";
import styled from "styled-components";

const MyModal = ({ isOpen, setIsOpen }) => {
  return (
    <CustomModal isOpen={isOpen}>
      <div>모달 입니다.</div>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        확인
      </button>
    </CustomModal>
  );
};

export default MyModal;

const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 310px;
  height: 200px;
  background-color: #5c7185;
`;
