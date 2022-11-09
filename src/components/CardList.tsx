import React from "react";
import Card from "./Card";
import { CardProps } from "../util/type";
import styled from "styled-components";

type List<T> = {
  data: T[];
};

const CardList = (props: List<CardProps>) => {
  const { data } = props;

  return (
    <Ul>
      {data &&
        data.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
    </Ul>
  );
};

export default CardList;

const Ul = styled.ul`
  > li:not(li:last-child) {
    margin-bottom: 10px;
  }
`;
