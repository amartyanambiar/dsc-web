import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.basePath);
  }, []);
  return (
    <div className="shadow-lg">
      <nav className="px-3 pt-2 flex flex-row justify-between items-center">
        <div>
          <Image src="/gdsc_logo.png" height="50px" width="333px" />
        </div>
        <ul className="flex flex-row uppercase text-sm">
          <li className="px-3">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="px-3">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="px-3">
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li className="px-3">
            <Link href="/team">
              <a>Team</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
