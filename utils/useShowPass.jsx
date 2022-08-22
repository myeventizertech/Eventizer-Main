import { useState, useCallback } from "react";

function useShowPass() {
  const [isShow, setIsShow] = useState(false);
  const handleShowClick = useCallback((event) => {

    setIsShow((prev) => !prev);
  }, []);

  return { isShow, handleShowClick };
}

export default useShowPass;
