import { useEffect, useState, useRef, useCallback } from "react";

function UseOutsideClick() {
  const refOutClick = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleAvatarClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    function bodybubble(event) {
      if (refOutClick.current && !refOutClick.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.body.addEventListener("click", bodybubble);
    return () => {
      document.body.removeEventListener("click", bodybubble);
    };
  }, []);

  return { isOpen, refOutClick, handleAvatarClick };
}

export default UseOutsideClick;
