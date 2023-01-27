import React from "react";
import Card from "../Card/Card";
import { CardProps } from "../../types/type";
import * as S from "./CardList.style";

type List<T> = {
  data: T[];
  reload?: boolean;
};

const CardList = (props: List<CardProps>) => {
  const { data, reload } = props;

  return (
    <S.Ul>
      {data &&
        data.map((item) => {
          return <Card {...item} key={item.id} reload={reload} />;
        })}
    </S.Ul>
  );
};

export default CardList;
