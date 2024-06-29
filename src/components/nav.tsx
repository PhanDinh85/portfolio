import { useState } from "react";
import { CgNametag } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import protfolio from '../assets/portfolio.png';

const nav = () => {

  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);

  }
  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className=" flex items-center justify-between px-10 py-5 lg: flex-row">
        <div >
          {/* <a href="" className="text-white font-mono text-3xl 
            tracking-wider flex items-center"><CgNametag />logo</a> */}
            <a href="" className="text-white font-mono text-3xl 
            tracking-wider flex items-center"><img src={protfolio} width={50} height={50} /></a>
        </div>
        <div className="text-white space-x-4">
          <div className='ssm:hidden lg:block space-x-2'>
            <a href="" className=" hover:bg-indigo-800
                rounded-full px-5 py-2 text-xl">Skills</a>
            <a href="" className=" hover:bg-indigo-800
                rounded-full px-5 py-2 text-xl">Projects</a>
            <a href="" className=" hover:bg-indigo-800
                rounded-full px-5 py-2 text-xl">Testimonails</a>
          </div>
          <div className=" ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className="text-white" />
            ) : (<HiMenuAlt1 onClick={openMenu} size={30} className="text-white" />)}

          </div>
        </div>
      </div>
      <div className="ssm:block lg:hidden" >
        {toggle ? (
          <div className=" flex justify-between ml-10">
            <ul className=" text-white">
              <li className=" hover:bg-indigo-800 text-xl mb-2 cursor-pointer">Skills</li>
              <li className="text-xl mb-2">Projects</li>
              <li className="text-xl mb-2">Testimonails</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}

      </div>
    </>
  );
};

export default nav;
