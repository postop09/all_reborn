import React from "react";
import styled from "styled-components";

type RecycleProps = {
  recycleList: string[];
};

const RecycleList = (props: RecycleProps) => {
  const { recycleList } = props;

  return (
    <Ul>
      {recycleList.map((item, index) => {
        return <Li key={index}>{item}</Li>;
      })}
    </Ul>
  );
};

export default RecycleList;

const Ul = styled.ul`
  display: flex;
  margin: 8px 0;
  ${({ theme }) => theme.TEXT.body14}
`;

const Li = styled.li`
  &:not(li:last-child)::after {
    content: "";
    display: inline-block;
    border-radius: 100%;
    margin: 0 4px 2px;
    width: 4px;
    height: 4px;
    vertical-align: middle;
    background: #00000080;
  }
`;
