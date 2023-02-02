import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const useSetPathName = () => {
  const navigate = useNavigate();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  return {navigate, pathName};
};

export default useSetPathName;