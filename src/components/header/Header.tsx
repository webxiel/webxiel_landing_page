import './Header.scss'
import { ReactComponent as Logo } from '../../assets/images/Logo.svg'
import { ReactComponent as YellowRight } from '../../assets/images/yellow-right.svg';
import { ReactComponent as YellowLeft } from '../../assets/images/yellow-left.svg'
import { ReactComponent as Menubar } from '../../assets/images/Menubar.svg'
import { NavLink } from "react-router-dom"
import { ReactComponent as ActiveNavDash } from "../../assets/images/nav-link-dash.svg"
import { useState } from 'react';


type headerProps = {
  title: string,
  text: string,
  showText?: boolean,
  children?: React.ReactNode
}

export const navLinksArray = [
  "home",
  "about us",
  "services",
  "products",
  "partners"
];

const Header = ({ title, text, showText = true, children }: headerProps) => {
  const [showNav, setShowNav] = useState(false);


  return (
    <header className="header">
      <section className="nav">
        <figure className="logo">
          <Logo />
        </figure>

        <nav className={showNav ? "nav__links" : "nav__links hide-nav"}>
          {navLinksArray.map((navItem: string) => {
            let words = navItem.split(" ");
            let newword: string;
            words.length == 2 ? newword = words[0] + "-" + words[1] : newword = navItem;

            return (
              <NavLink className={({ isActive }) => isActive ? "nav__link--active" : "nav__link"}
                to={`/${newword}`}
                key={navItem}
              >
                <span>
                  {navItem}
                </span>
                <figure className="nav__link__dash">
                  <ActiveNavDash />
                </figure>
              </NavLink>
            )
          })}

        </nav>
        <figure className="menu-bar" onClick={() => setShowNav(!showNav)}>
          <Menubar />
        </figure>
      </section>

      {/* Mobile navigation */}
      <section className={showNav ? "nav__mobile" : "nav__mobile hide"}>
        <section className="nav__mobile__top">
          <figure className="logo__mobile">
            <p className="logo">Webxiel</p>
          </figure>
          <figure className="menu-bar__mobile" onClick={() => setShowNav(!showNav)}>
            <Menubar />
          </figure>
        </section>
        <nav className={showNav ? "nav__links__mobile" : "nav__links__mobile hide-nav"}>
          {navLinksArray.map((navItem: string) => {
            let words = navItem.split(" ");
            let newword: string;
            words.length == 2 ? newword = words[0] + "-" + words[1] : newword = navItem;

            return (
              <NavLink className={({ isActive }) => isActive ? "nav__link--active" : "nav__link"}
                to={`/${newword}`}
                key={navItem}
              >
                {navItem}
              </NavLink>
            )
          })}

        </nav>
      </section>
      <section className="hero">
        {
          showText ?
            (
              <>
                <h1 className="title">{title}</h1>
                <p className="text">{text}</p>
              </>
            ) :
            (
              <>{children}</>
            )
        }
      </section>
      <figure className="yellow-left">
        <YellowLeft />
      </figure>
      <figure className="yellow-right">
        <YellowRight />
      </figure>
    </header>
  )
}

export default Header