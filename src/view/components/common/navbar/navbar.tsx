import React, { useState, KeyboardEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as classes from './navbar.module.css';
// eslint-disable-next-line import/no-cycle
import { useAppContext } from '../../../../App';
import loginDarkIcon from '../../../../assets/icons/login.svg';
import loginWhiteIcon from '../../../../assets/icons/login_white.svg';
import logoutDarkIcon from '../../../../assets/icons/logout.svg';
import logoutWhiteIcon from '../../../../assets/icons/logout_white.svg';
import searchDarkIcon from '../../../../assets/icons/search.svg';
import searchWhiteIcon from '../../../../assets/icons/search_white.svg';
import { useAuth } from '../../../../data/api/AuthProvider';

const SHOWLOGIN = true;

interface NavbarProps {
  page: string;
}

function Navbar({ page }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { state, setState } = useAppContext();
  const loginIcon = page === 'main' ? loginWhiteIcon : loginDarkIcon;
  const logoutIcon = page === 'main' ? logoutWhiteIcon : logoutDarkIcon;
  const searchIcon = page === 'main' ? searchWhiteIcon : searchDarkIcon;
  let userImg = '';
  const { user } = useAuth();
  if (state.userLoggedIn) {
    userImg = user.picture;
  }

  const menuMainBg = page === 'main' ? classes.menuMain : '';
  const colorText = page === 'main' ? '#fff' : '#000';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuFromKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      toggleMenu();
    }
  };

  useEffect(() => {
    if (user) {
      setState((prevState) => ({ ...prevState, userLoggedIn: true, user }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <nav className={classes.navbar}>
      <div
        className={`${classes.burger} ${isOpen ? classes.rotate : ''}`}
        onClick={toggleMenu}
        onKeyDown={toggleMenuFromKey}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu">
        <div className={classes.burgerBar} style={{ backgroundColor: colorText }} />
        <div className={classes.burgerBar} style={{ backgroundColor: colorText }} />
        <div className={classes.burgerBar} style={{ backgroundColor: colorText }} />
      </div>
      <div className={`${classes.menu} ${menuMainBg} ${isOpen ? classes.show : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Головна
        </Link>
        <Link to="/news" onClick={toggleMenu}>
          Новини
        </Link>
        <Link to="/documents" onClick={toggleMenu}>
          Документи
        </Link>
        <Link to="/acts" onClick={toggleMenu}>
          Діяльність
        </Link>
        <Link to="/contacts" onClick={toggleMenu}>
          Контакти
        </Link>
        <Link to="/search" onClick={toggleMenu} title="Пошук на сайті">
          <div className={classes.icon} style={{ backgroundImage: `url('${searchIcon}')` }} />
        </Link>

        {SHOWLOGIN &&
          (!state.userLoggedIn ? (
            <Link to="/login" onClick={toggleMenu} title="Зайти">
              <div className={classes.icon} style={{ backgroundImage: `url('${loginIcon}')` }} />
            </Link>
          ) : (
            <div className={classes.iconWrapper}>
              <Link to="/profile" onClick={toggleMenu} title="Профіль">
                <div className={classes.icon} style={{ backgroundImage: `url('${userImg}')` }} />
              </Link>
              <Link to="/logout" onClick={toggleMenu} title="Вийти">
                <div className={classes.icon} style={{ backgroundImage: `url('${logoutIcon}')` }} />
              </Link>
            </div>
          ))}
      </div>
      {isOpen ? (
        <div
          className={classes.shadow}
          onClick={toggleMenu}
          onKeyDown={toggleMenuFromKey}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        />
      ) : (
        <div />
      )}
    </nav>
  );
}

export default Navbar;
