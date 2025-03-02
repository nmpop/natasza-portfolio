import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 mb-14 w-full py-5">
      <nav className="container mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <Link href="/">NP</Link>
        </div>
        <ul className="flex gap-3">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
