import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const [lastScrolly, setlastScrolly] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMenu) {
        setshow("-translate-y-[80px]");
      } else {
        setshow("shadow-sm");
      }
    } else {
      setshow("translate-y-0");
    }
    setlastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrolly]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} setshowCatMenu={setshowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setshowCatMenu={setshowCatMenu}
            setmobileMenu={setmobileMenu}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          {/* icon start */}
          <Link href="/cart" className="flex items-center  gap-7 " >
           
          <div className="w-8 mid:w-12 h-8 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* icon end */}

          {/* icon start */}
          <div className="w-8 mid:w-12 h-8 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>
          {/* icon end */}
          </Link>
          {/* mobile icon start */}
          <div className="w-8 mid:w-12 h-8 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setmobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setmobileMenu(true)}
              />
            )}
            {/* mobile icon end */}
          </div>
        </div>
       
      </Wrapper>
    </header>
  );
};

export default Header;
