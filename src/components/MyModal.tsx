import Modal from "react-modal";

const MyModal = ({ isOpen }: any) => {
  return (
    <Modal isOpen={isOpen}>
      <div>모달 입니다.</div>
    </Modal>
  );
};

export default MyModal;
