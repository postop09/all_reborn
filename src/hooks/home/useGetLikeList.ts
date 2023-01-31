import { useEffect, useState } from "react";
import { onGetLikes } from "../../util/handleLikes";
import * as mockData from "../../mockData";
import { CardProps } from "../../types/type";

interface List extends Array<CardProps> {}

const useGetLikeList = () => {
  const [list, setList] = useState<List>([]);

  useEffect(() => {
    onFilterLikes();
  }, []);

  const onFilterLikes = () => {
    const storage = onGetLikes();
    const data = mockData.list;
    let newData: List = [];

    if (storage) {
      storage.map((likeId) => {
        const findItem = data.find((item) => item.id === likeId);
        if (findItem) {
          newData.push(findItem);
        }
      });
      setList(newData);
    }
    return;
  };

  return {list};
};

export default useGetLikeList;