"use client";
import { links } from "@/constants/constant";
import { BsTextParagraph } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-14 px-10 flex items-center justify-between backdrop-blur-2xl">
        <div className="text-5xl">
          <img src={"/1.png"} alt="Your Logo" className="h-28 w-22" />
        </div>
        <div className="md:flex items-center justify-center gap-10 hidden">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="transition-all hover:text-blue-500"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="block md:hidden cursor-pointer" onClick={handleClick}>
          {isOpen ? <IoClose size={35} /> : <BsTextParagraph size={35} />}
        </div>
      </div>
      <div className={`flex top-14 left-0 flex-col justify-around items-center backdrop-blur-2xl w-full h-[calc(100vh-56px)] ${isOpen ? '' : 'hidden'}`}>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="transition-all hover:text-blue-500 text-2xl"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
