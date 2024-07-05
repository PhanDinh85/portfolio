import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import portfolio from '../assets/portfolio.png';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between px-10 py-5 lg:flex-row">
        <div>
          <a href="#home" className="text-white font-mono text-3xl tracking-wider flex items-center">
            <img src={portfolio} width={50} height={50} alt="logo" />
          </a>
        </div>
        <div className="text-white space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <Link to="aboutme" smooth={true} duration={500} className="hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">About me</Link>
            <Link to="projects" smooth={true} duration={500} className="hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">Projects</Link>
            <Link to="technology" smooth={true} duration={500} className="hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">Technology</Link>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className="text-white" />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} className="text-white" />
            )}
          </div>
        </div>
      </div>
      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul className="text-white">
              <li className="hover:bg-indigo-800 text-xl mb-2 cursor-pointer"><Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link></li>
              <li className="hover:bg-indigo-800 text-xl mb-2 cursor-pointer"><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link></li>
              <li className="hover:bg-indigo-800 text-xl mb-2 cursor-pointer"><Link to="testimonials" smooth={true} duration={500} onClick={closeMenu}>Testimonials</Link></li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Nav;
