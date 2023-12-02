import { Dispatch, FC, SetStateAction } from "react";

import cn from "../../lib/cn";
import { navLinks } from "../../constants/navbar";
import { Link } from "react-router-dom";

type Props = {
  scroll: string;
  setScroll: Dispatch<SetStateAction<string>>;
  mobileLinksOpen: boolean;
  setMobileLinksOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileLinks: FC<Props> = ({
  scroll,
  setScroll,
  mobileLinksOpen,
  setMobileLinksOpen,
}) => {
  return (
    <div
      className={cn(
        "black-gradient absolute right-0 top-20 z-10 mx-4 my-2 flex min-w-[140px] rounded-xl p-6",
        !mobileLinksOpen && "hidden",
      )}
    >
      <ul className="flex list-none flex-col  items-start justify-end gap-4">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={cn(
              "font-poppins cursor-pointer text-base font-medium",
              scroll === link.title ? "text-white" : "text-secondary",
            )}
            onClick={() => {
              setMobileLinksOpen(false);
              setScroll(link.title);
            }}
          >
            <Link to={`#${link.id}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileLinks;
