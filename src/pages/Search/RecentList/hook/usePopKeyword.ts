import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";

const usePopKeyword = () => {
  const { recentKeyword, setRecentKeyword }: any = useContext(AppContext);

  const popKeyword = (keyword: string) => {
    const storage = localStorage.getItem("recentKeyword");
    if (storage) {
      const arr = JSON.parse(storage);
      const filter = arr.filter((item: string) => item !== keyword);
      localStorage.setItem("recentKeyword", JSON.stringify(filter));
      setRecentKeyword(filter);
    }
  };

  return {popKeyword, recentKeyword};
};

export default usePopKeyword;