import { useContext, useEffect, useState } from 'react';
import { AppContext } from "../../../context/AppContext";
import getQuery from "../../../util/getQuery";
import mockRequest from "../../../apis/mockRequest";

const useHeader = () => {
  const { setSearchList, setSearchCase }: any = useContext(AppContext);
  const [title, setTitle] = useState<string | null>("");

  useEffect(() => {
    setTitle(getQuery());
  }, [getQuery(), window.location.pathname]);

  const fetchSearchList = async (path: string) => {
    try {
      const {data} = await mockRequest(`/${path}`);

      if (data.length === 0) {
        setSearchList([path]);
        setSearchCase("noData");
      } else {
        setSearchList(data);
        setSearchCase("hasData");
      }
    } catch (e) {
      setSearchList([path]);
      setSearchCase("noData");
    }
  };

  return {title, fetchSearchList};
};

export default useHeader;