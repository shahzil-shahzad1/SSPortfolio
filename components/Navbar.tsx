import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { PageDef } from "@/lib/data";

type NavbarProps = {
  activeSectionId: string;
  pages: PageDef[];
};

const Navbar = ({ activeSectionId, pages }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 bg-[#18181B] shadow-md rounded-full w-fit">
      {/* Desktop Menu */}
      <ul className="hidden nav-show justify-center items-center gap-2 px-2 py-4">
        {pages.map((page, index) => (
          <li key={index}>
            <a
              href={`#${page.id}`}
              className={`text-sm sm:text-base font-semibold transition-colors rounded-full px-4 py-2 duration-200 hover:bg-[#FF3B30] hover:text-white ${
                activeSectionId === page.id
                  ? "bg-[#FF3B30] text-white border border-[#FF3B30]"
                  : "text-gray-100 hover:text-black"
              }`}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="nav-hide items-center px-4 py-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-100 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full -left-[130px] w-[200px] bg-[#18181B] rounded-lg shadow-md mt-2 nav-hide">
          <ul className="flex flex-col items-center gap-2 py-4">
            {pages.map((page, index) => (
              <li key={index} className="w-full">
                <a
                  href={`#${page.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full text-center text-sm font-semibold transition-colors px-4 py-2 rounded-md hover:bg-[#FF3B30] hover:text-white ${
                    activeSectionId === page.id
                      ? "bg-[#FF3B30] text-white border border-[#FF3B30]"
                      : "text-gray-100 hover:text-black"
                  }`}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
