import { Dispatch, FC, SetStateAction } from "react";

import { close, menu } from "../../assets";

type Props = {
  mobileLinksOpen: boolean;
  setMobileLinksOpen: Dispatch<SetStateAction<boolean>>;
};

const Hamburger: FC<Props> = ({ mobileLinksOpen, setMobileLinksOpen }) => {
  return (
    <img
      src={mobileLinksOpen ? close : menu}
      alt="menu"
      className="h-6 w-6 cursor-pointer object-contain"
      onClick={() => setMobileLinksOpen((prev) => !prev)}
    />
  );
};

export default Hamburger;
