import Link from "next/link";

const ButtonLinkOrClick = ({
  isLink = true,
  goto = "/",
  text,
  font = "font-14 font-medium",
  py = "py-[5px]",
  px = "px-[26px]",
  bgcolor = "bgcolor1",
  handleBtn,
  otherCss = "",
  radius = "rounded-[8px]",
  id = "",
}) => {
  if (isLink) {
    return (
      <Link href={goto}>
        <a
          id={id}
          className={`${bgcolor} ${py} ${px} ${radius} btn-hover text-white  ${font} whitespace-nowrap ${otherCss}`}
        >
          {text}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        id={id}
        onClick={handleBtn}
        className={`${bgcolor} ${py} ${px} ${radius}  btn-hover text-white  ${font}
         whitespace-nowrap w-full ${otherCss}`}
      >
        {text}
      </button>
    );
  }
};

export default ButtonLinkOrClick;
