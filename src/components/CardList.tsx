import React from 'react';
import Card1 from "./Card";
import {CardProps} from "../util/type";

type List<T> = {
  data: T[];
}

const CardList = (props: List<CardProps>) => {
  const {data} = props;

  return (
    <ul>
      {data &&
        data.map((item) => {
          return (
            <Card1 {...item} key={item.id}/>
          )
        })
      }
    </ul>
  );
};

export default CardList;