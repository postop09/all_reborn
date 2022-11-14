import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

interface contextProps {
  children: React.ReactNode | React.ReactNode[];
}

const AppProvider = ({ children }: contextProps) => {
  const keywordStorage = localStorage.getItem("recentKeyword");
  const [recentKeyword, setRecentKeyword] = useState<string[]>([]);
  const [searchList, setSearchList] = useState([]);

  if (!keywordStorage) {
    localStorage.setItem("recentKeyword", JSON.stringify([]));
  }

  useEffect(() => {
    if (keywordStorage) {
      const arr = JSON.parse(keywordStorage);
      setRecentKeyword(arr);
    }
  }, []);

  // TODO - store type 설정 고민해봐야 함.
  const store = {
    recentKeyword,
    setRecentKeyword,
    searchList,
    setSearchList,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
