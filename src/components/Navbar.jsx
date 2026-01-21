import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-orange-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="px-4 py-2 border rounded-md hover:bg-white/10"
            >
              Sign In
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed top-16 left-0 z-20 bg-neutral-900 w-full h-screen p-12 flex flex-col items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="text-lg hover:text-orange-400"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border rounded-md hover:bg-white/10"
              >
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
