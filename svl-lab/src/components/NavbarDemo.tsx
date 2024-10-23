import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        <Link to="/home">Home</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
        <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Papers">
        <Link to="/papers">Papers</Link>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Members">
        <Link to="/members">Members</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
