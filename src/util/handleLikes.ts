// 로컬스토리지의 좋아요 목록을 확인
export const onCheckLikes = (id: number): void | boolean => {
  const storage = localStorage.getItem("likes");

  if (storage) {
    const arr = JSON.parse(storage);
    const test = arr.filter((item: number) => item === id);
    return test.length > 0;
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
    const test = arr.filter((item: number) => item === id);

    if (test.length > 0) {
      const filter = arr.filter((item: number) => item !== id);
      localStorage.setItem("likes", JSON.stringify(filter));
    } else {
      arr.push(id);
      localStorage.setItem("likes", JSON.stringify(arr));
    }
  }
};
