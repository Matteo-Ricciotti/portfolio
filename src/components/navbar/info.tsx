import { Link } from "react-router-dom";
import { Dispatch, FC, SetStateAction } from "react";

import { logo } from "../../assets";

type Props = {
  setScroll: Dispatch<SetStateAction<string>>;
};

const Info: FC<Props> = ({ setScroll }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setScroll("");
        window.scrollTo(0, 0);
      }}
    >
      <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
      <p className="flex cursor-pointer text-lg font-bold">
        Matteo &nbsp;<span className="hidden sm:block">Ricciotti</span>
      </p>
    </Link>
  );
};

export default Info;
