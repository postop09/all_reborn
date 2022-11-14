import React, { useState } from "react";
import { OneWayButton } from "./Button";
import { Icon16 } from "../style/style";
import IDown from "../assets/icon/icon_down.png";
import styled from "styled-components";

type DropDownProps = {
  list: string[];
  select: string;
  setSelect: React.SetStateAction<any>; // type 생각해보자
  defaultValue: string;
};

const DropDown = (props: DropDownProps) => {
  const { list, setSelect, select, defaultValue } = props;
  const [showOption, setShowOption] = useState(false);

  const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelect(e.currentTarget.value);
    setShowOption(false);
  };

  return (
    <DropDownBox>
      <OneWayButton
        text={"labelMd"}
        color={"white"}
        round={"md"}
        border={true}
        onClick={() => setShowOption((prev) => !prev)}
      >
        <span>{select || defaultValue}</span>
        <Icon16 src={IDown} alt="카테고리 열기" />
      </OneWayButton>
      <Ul showOption={showOption}>
        {list.map((product, index) => {
          return (
            <li key={index}>
              <button type="button" value={product} onClick={onSelect}>
                {product}
              </button>
            </li>
          );
        })}
      </Ul>
    </DropDownBox>
  );
};

export default DropDown;

const DropDownBox = styled.div`
  position: relative;
  margin-left: 8px;
`;

const Ul = styled.ul<{ showOption: boolean }>`
  display: ${({ showOption }) => (showOption ? "block" : "none")};
  position: absolute;
  border: 1px solid ${({ theme }) => theme.COLOR.keyOriginal};
  width: 100%;
  margin-top: 4px;
  padding: 4px 8px;
  text-align: center;
  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.ROUND.sm};

  button {
    border-radius: ${({ theme }) => theme.ROUND.xs};
    width: 100%;
    ${({ theme }) => theme.TEXT.labelMd};

    &:hover {
      background-color: ${({ theme }) => theme.COLOR.keyWhite};
    }
  }
`;
