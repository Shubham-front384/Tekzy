import Logo from '/Img/tekzyLogo.svg';
import rightArrow from '/Img/rightArrow.svg';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="tekzy-logo" />
        </div>
        <ul className={`nav-menu ${isOpen ? '' : 'menu-open'}`}>
          <li>
            <span>home</span>
            <span>home</span>
          </li>
          <li>
            <span>studio</span>
            <span>studio</span>
          </li>
          <li>
            <span>works</span>
            <span>works</span>
          </li>
          <li>
            <span>services</span>
            <span>services</span>
          </li>
          <li>
            <span>blogs</span>
            <span>blogs</span>
          </li>
          <li>
            <a href="#" className="talk">
              <span>let's talk</span>
              <span>
                <img src={rightArrow} alt="right-arrow" />
              </span>
            </a>
          </li>
        </ul>
        <div className="nav-contact">
          <a href="#" className="talk">
            <span>Let's talk</span>
            <span>
              <img src={rightArrow} alt="right-arrow" />
            </span>
          </a>
          <div className="menu-close">
            {isOpen ? (
              <div className="contact-menu" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24">
                  <path d="M 0 5 L 24 5" strokeWidth={'2'} stroke="#000" />
                  <path d="M 0 12 L 24 12" strokeWidth={'2'} stroke="#000" />
                  <path d="M 0 19 L 24 19" strokeWidth={'2'} stroke="#000" />
                </svg>
              </div>
            ) : (
              <div className="contact-close" onClick={toggleMenu}>
                <svg viewBox="0 0 24 24">
                  <path d="M 2 2 L 22 22" strokeWidth={'2'} stroke="#000" />
                  <path d="M 2 22 L 22 2" strokeWidth={'2'} stroke="#000" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
