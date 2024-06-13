import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-8 py-3">
      <Link className="font-bold text-white" href="/">
        Home
      </Link>
      <Link className="rounded bg-white p-2" href="/addTopic">
        Add Topic
      </Link>
    </nav>
  );
};
