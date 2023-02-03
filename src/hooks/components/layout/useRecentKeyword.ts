import React, { useContext, useState } from 'react';
import { AppContext } from "../../../context/AppContext";

const useRecentKeyword = () => {
  const { setRecentKeyword }: any = useContext(AppContext);
  const [search, setSearch] = useState("");

  const pushRecentKeyword = () => {
    const storage = localStorage.getItem("recentKeyword");

    if (storage) {
      const arr = JSON.parse(storage);
      const filter = arr.filter((item: string) => item !== search);
      filter.push(search);
      localStorage.setItem("recentKeyword", JSON.stringify(filter));
      setRecentKeyword(filter);
    }
  };

  return {pushRecentKeyword, search, setSearch};
};

export default useRecentKeyword;