import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = () => (
    <ul className="list-none flex flex-col sm:flex-row gap-6 sm:gap-8 sm:text-[18px] text-[20px] font-medium text-center">
      <li
        className={`text-white hover:text-white cursor-pointer`}
        onClick={() => setActive('Home')}
      >
        <Link to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >Home</Link>
      </li>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? 'text-white' : 'text-secondary'
            } hover:text-white cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      {/* <li className="text-white hover:text-white cursor-pointer">
        <button onClick={toggleResume}>Resume</button>
      </li> */}
    </ul>
  );

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-1 justify-center">
          {renderNavLinks()}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${toggle ? 'flex' : 'hidden'} flex-col items-center`}
          >
            {renderNavLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
