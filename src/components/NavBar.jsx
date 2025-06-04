import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { LuBookText, LuMessageSquareText } from "react-icons/lu";
import { RiServerLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const navs = [
  { href: "#", icon: <FaHome /> },
  { href: "#about", icon: <CiUser /> },
  { href: "#exp", icon: <LuBookText /> },
  { href: "#service", icon: <RiServerLine /> },
  { href: "#portfolio", icon: <LuMessageSquareText /> },
];

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className=" fixed flex justify-center items-center bottom-8 left-1/2 bg-black/30 rounded-full py-3 px-6 space-x-5 translate-x-[-50%] backdrop-blur-[15px] z-50 w-max mx-auto">
      {navs.map((nav) => (
        <a
          onClick={() => setActiveNav(nav.href)}
          href={nav.href}
          className={cn(
            "text-white/40 text-[1.1rem] p-3 md:p-4 rounded-full transition-all duration-400 hover:text-white font-semibold",
            activeNav === nav.href ? "bg-primary-variant/40 text-white" : ""
          )}
        >
          {nav.icon}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
