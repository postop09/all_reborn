import { useEffect, useState } from 'react';
import mockRequest from "../../apis/mockRequest";
import * as mockData from "../../mockData";

const useGetCompList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    if (process.env.NODE_ENV === "development") {
      const {data} = await mockRequest("/list");
      setList(data);
    } else {
      const mockList: any = mockData.list;
      setList(mockList);
    }
  };

  return {list};
};

export default useGetCompList;