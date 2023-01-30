import { useState } from 'react';

const useCategory = () => {
  const [productSelect, setProductSelect] = useState("");
  const [recycleSelect, setRecycleSelect] = useState("");

  return {productSelect, setProductSelect, recycleSelect, setRecycleSelect};
};

export default useCategory;