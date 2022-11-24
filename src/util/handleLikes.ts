// 로컬스토리지의 좋아요 목록을 확인
export const onGetLikes = (): number[] | void => {
  const storage = localStorage.getItem("likes");
  if (storage) {
    const arr = JSON.parse(storage);
    return arr;
  }
  return;
};

export const onCheckLikes = (id: number): boolean | void => {
  const storage = onGetLikes();

  if (storage) {
    const filter = storage.filter((item: number) => item === id);
    return filter.length > 0;
  }
};

// 로컬스토리지에 좋아요 추가/삭제
export const onChangeLikes = (id: number) => {
  const storage = localStorage.getItem("likes");

  if (!storage) {
    localStorage.setItem("likes", JSON.stringify([id]));
  }
  if (storage) {
    const arr = JSON.parse(storage);
    const filter = arr.filter((item: number) => item === id);

    if (filter.length > 0) {
      const filter = arr.filter((item: number) => item !== id);
      localStorage.setItem("likes", JSON.stringify(filter));
    } else {
      arr.push(id);
      localStorage.setItem("likes", JSON.stringify(arr));
    }
  }
};
