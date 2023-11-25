import { Dispatch, FC, SetStateAction } from "react";
import cn from "../../lib/cn";

import LinkItem, { Link } from "./link-item";
import { navLinks } from "../../constants/navbar";

type Props = {
  mobile?: boolean;
  scroll: string;
  setScroll: Dispatch<SetStateAction<string>>;
  setMobileLinksOpen?: Dispatch<SetStateAction<boolean>>;
};

const Links: FC<Props> = ({
  mobile,
  scroll,
  setScroll,
  setMobileLinksOpen,
}) => {
  const handleLinkClick = (link: Link) => {
    setScroll(link.title);
    if (mobile && setMobileLinksOpen) setMobileLinksOpen(false);
  };

  return (
    <ul
      className={cn(
        "hidden list-none gap-10 sm:flex",
        mobile && "flex flex-col  items-start justify-end gap-4",
      )}
    >
      {navLinks.map((link) => (
        <LinkItem
          link={link}
          scroll={scroll}
          mobile={mobile}
          handleLinkClick={handleLinkClick}
        />
      ))}
    </ul>
  );
};

export default Links;
