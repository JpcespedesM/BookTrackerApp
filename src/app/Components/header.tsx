import React from "react";
import Link from "next/link";

 const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Book Tracker</h1>
      <nav>
        <ul className="flex space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
          <li>
          <Link href="/Profile" className="hover:underline">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;