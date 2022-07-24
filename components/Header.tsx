import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [changeMenu, setchangeMenu] = useState(false);
  const [which, setWhich] = useState(0);
  const [url, setUrl] = useState(router.pathname);

  useEffect(() => {
    switch (url) {
      case "/":
        setWhich(0);
        break;
      case "/shop":
        setWhich(1);
        break;
      case "/gallery":
        setWhich(3);
        break;
      case "/team":
        setWhich(4);
        break;
      default:
        break;
    }
  }, [url]);

  return (
    <header>
      <div className="py-6 lg:hidden">
        <div className="flex items-center justify-between">
          <p className="logo">loomi.</p>
          {changeMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setchangeMenu((prev) => !prev)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => setchangeMenu((prev) => !prev)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          )}
        </div>

        <div className={`${changeMenu ? "flex" : "hidden"} absolute left-0 right-0 z-10 flex-col items-center gap-6 bg-black py-8 font-bold`}>
          {["Home", "Shop", "Gallery", "Team"].map((item, index) => (
            <Link href={`/${index === 0 ? "" : item.toLowerCase()}`} key={index}>
              <a className="font-medium uppercase">{item}</a>
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden items-center justify-center gap-8 py-4 uppercase lg:flex">
        {["Home", "Shop", "loomi", "Gallery", "Team"].map((item, index) =>
          index === 2 ? (
            <p className="logo" key={index}>
              loomi.
            </p>
          ) : (
            <Link href={`/${index === 0 ? "" : item.toLowerCase()}`} key={index}>
              <a className={`${index === which ? "link" : "hover:link"} font-Josefin text-xs tracking-[0.4em]`} onClick={() => setWhich(index)}>
                {item}
              </a>
            </Link>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
