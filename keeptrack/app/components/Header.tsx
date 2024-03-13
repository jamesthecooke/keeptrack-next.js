import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-4 border-black">
      <div className="flex justify-between items-center p-4">
        <div className="w-24">
          <details className="dropdown">
            <summary className="m-1 btn">Menu</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 text-black">
              <li>
                <a>
                  <Link href="/home">Home</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link href="/moneyin">Money In</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link href="/moneyout">Money Out</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link href="/home">Settings</Link>
                </a>
              </li>
            </ul>
          </details>
        </div>
        <h1 className="text-3xl">Keep Track</h1>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="hello"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
