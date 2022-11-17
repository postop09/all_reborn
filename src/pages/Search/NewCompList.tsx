import React, { useEffect, useState } from "react";
import { TitleH3 } from "../../style/style";
import CardList from "../../components/CardList";
import TxtNoCompList from "../../components/TxtNoCompList";

const NewCompList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    if (process.env.NODE_ENV === "development") {
      const res = await fetch("/list");
      const json = await res.json();
      const data = json.data;
      setList(data);
    } else {
      setList([]);
    }
  };

  if (list.length > 0) {
    return (
      <section>
        <TitleH3>최근에 등록되었어요</TitleH3>
        <CardList data={list} />
      </section>
    );
  }
  return (
    <section>
      <TitleH3>최근에 등록되었어요</TitleH3>
      <TxtNoCompList />
    </section>
  );
};

export default NewCompList;
