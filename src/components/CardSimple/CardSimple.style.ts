import styled from "styled-components";
import { Img109 } from "../../style/style";

export const Li = styled.li`
  display: inline-block;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Img = styled(Img109)`
  border-radius: ${({ theme }) => theme.ROUND.sm};

  @media screen and (max-width: 380px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 415px) {
    width: 120px;
    height: 120px;
  }
`;

export const LikeBtn = styled.button`
  position: absolute;
  bottom: 6px;
  right: 8px;
`;

export const CompanyName = styled.p`
  margin-top: 8px;
  text-align: center;
`;
