import { FC } from "react";
import cn from "../../lib/cn";
import { Link } from "react-router-dom";

export type Link = {
  id: string;
  title: string;
};

type Props = {
  link: Link;
  scroll: string;
  mobile?: boolean;
  handleLinkClick: (link: Link) => void;
};

const LinkItem: FC<Props> = ({ link, mobile, scroll, handleLinkClick }) => {
  return (
    <li
      className={cn(
        "cursor-pointer text-lg font-medium",
        !mobile && "hover:text-white",
        mobile && "font-poppins text-base",
        scroll === link.title ? "text-white" : "text-secondary",
      )}
      onClick={() => handleLinkClick(link)}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  );
};

export default LinkItem;
