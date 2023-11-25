import { FC, useState } from "react";
import cn from "../../lib/cn";

import Links from "./links";
import Info from "./info";
import Hamburger from "./hamburger";

const Navbar: FC = () => {
  const [scroll, setScroll] = useState<string>("");
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

  return (
    <nav className="padding-x fixed top-0 z-20 flex w-full items-center bg-primary py-5">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Info setScroll={setScroll} />
        <Links scroll={scroll} setScroll={setScroll} />
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Hamburger
            mobileLinksOpen={mobileLinksOpen}
            setMobileLinksOpen={setMobileLinksOpen}
          />
          <div
            className={cn(
              "black-gradient absolute right-0 top-20 z-10 mx-4 my-2 flex min-w-[140px] rounded-xl p-6",
              !mobileLinksOpen && "hidden",
            )}
          >
            <Links
              scroll={scroll}
              setScroll={setScroll}
              setMobileLinksOpen={setMobileLinksOpen}
              mobile
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
