import React from "react";
import { TitleH3 } from "../../../style/style";
import CardList from "../../../components/CardList/CardList";
import NoCompListTxt from "../../../components/TxtNoCompList/noCompListTxt";
import useGetCompList from "../../CompanyList/hook/useGetCompList";

const NewCompList = () => {
  const {list} = useGetCompList();

  return (
    <section>
      <TitleH3>최근에 등록되었어요</TitleH3>
      {
        list.length > 0 ?
          <CardList data={list} />
          :
          <NoCompListTxt />
      }
    </section>
  );
};

export default NewCompList;
