import React, { useState } from "react";
import { OneWayButton } from "../Button/Button";
import { Icon16 } from "../../style/style";
import IDown from "../../assets/icon/icon_down.png";
import * as S from "./DropDown.style";

type DropDownProps = {
  list: string[];
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
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
    <S.DropDownBox>
      <OneWayButton
        text={"label12"}
        color={"white"}
        round={"md"}
        border={true}
        onClick={() => setShowOption((prev) => !prev)}
      >
        <span>{select || defaultValue}</span>
        <Icon16 src={IDown} alt="카테고리 열기" />
      </OneWayButton>
      <S.Ul showOption={showOption}>
        {list.map((product, index) => {
          return (
            <li key={index}>
              <button type="button" value={product} onClick={onSelect}>
                {product}
              </button>
            </li>
          );
        })}
      </S.Ul>
    </S.DropDownBox>
  );
};

export default DropDown;
