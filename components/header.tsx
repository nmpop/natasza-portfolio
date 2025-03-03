import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 mb-14 w-full py-5">
      <nav className="container mx-auto flex max-w-5xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-4xl">
            NP
          </Link>
        </div>
        <ul className="flex gap-3 text-xl">
          <li>
            <Link href="/home" className="underline-effect text-dove-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline-effect text-dove-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="underline-effect text-dove-gray-900"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="underline-effect text-dove-gray-900"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
