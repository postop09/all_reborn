import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

type Case = "default" | "noData" | "hasData";

interface contextProps {
  children: React.ReactNode | React.ReactNode[];
}

const AppProvider = ({ children }: contextProps) => {
  const keywordStorage = localStorage.getItem("recentKeyword");
  const [recentKeyword, setRecentKeyword] = useState<string[]>([]);
  const [searchList, setSearchList] = useState([]);
  const [searchCase, setSearchCase] = useState<Case>("default");

  if (!keywordStorage) {
    localStorage.setItem("recentKeyword", JSON.stringify([]));
  }

  useEffect(() => {
    if (keywordStorage) {
      const arr = JSON.parse(keywordStorage);
      setRecentKeyword(arr);
    }
  }, []);

  const store = {
    recentKeyword,
    setRecentKeyword,
    searchList,
    setSearchList,
    searchCase,
    setSearchCase,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
