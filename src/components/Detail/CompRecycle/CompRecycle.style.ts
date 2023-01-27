import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const RecycleWrapper = styled.dl`
  dt {
    flex: 1;
    margin-right: 8px;
    ${({ theme }) => theme.TEXT.body14};
  }

  dd {
    flex: 2;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  margin: 8px 0;
  ${({ theme }) => theme.TEXT.body14}
`;

export const ProductItem = styled.li`
  &:not(li:last-child) {
    margin-right: 4px;
  }
`;

export const BtnCopyDetail = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  text-align: left;
  ${({ theme }) => theme.TEXT.body12};
  border-radius: ${({ theme }) => theme.ROUND.sm};
  background-color: ${({ theme }) => theme.COLOR.keyWhite};
  transition: all 0.1s;

  &:active {
    background-color: rgba(74, 169, 108, 0.5);
  }
`;

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast-theme--colored.Toastify__toast--success {
    background-color: ${({ theme }) => theme.COLOR.keyOriginal};
  }
`;