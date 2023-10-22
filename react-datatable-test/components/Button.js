import Link from "next/link";

export const Button = ({ isLink, buttonText, href, buttonType, className }) => {
  return (
    <>
      {isLink && (
        <Link className={className} href={href}>
          {buttonText}
        </Link>
      )}
      {!isLink && (
        <button className={className} type={buttonType}>
          {buttonText}
        </button>
      )}
    </>
  );
};
