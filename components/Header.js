import React from "react";
import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";

const Header = ({ router }) => {
  return (
    <div className="shadow-lg">
      <nav className="px-3 pt-2 flex md:flex-row flex-col justify-between items-center">
        <div>
          <Image src="/gdsc_logo.png" height="50px" width="333px" />
        </div>
        <ul className="flex flex-row uppercase text-sm py-2">
          <li className="px-3 py-4">
            <Link href="/">
              <a
                className={`${
                  router.pathname === "/" ? "text-primary font-semibold" : ""
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="px-3 py-4">
            <Link href="/about">
              <a
                className={`${
                  router.pathname === "/about"
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                About
              </a>
            </Link>
          </li>
          <li className="px-3 py-4">
            <Link href="/events">
              <a
                className={`${
                  router.pathname === "/events"
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                Events
              </a>
            </Link>
          </li>
          <li className="px-3 py-4">
            <Link href="/team">
              <a
                className={`${
                  router.pathname === "/team"
                    ? "text-primary font-semibold"
                    : ""
                }`}
              >
                Team
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Header);
