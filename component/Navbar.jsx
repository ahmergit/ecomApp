import React from "react";
import Link from "next/link";
import "../style/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar ">
      <h1>Big Buy</h1>
      <ul className="link">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">SignUp</Link>
        </li>
        <li>
          <Link href="/create">Create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
