import './Header.scss'
import {ReactComponent as Logo} from '../../assets/images/Logo.svg'
import {ReactComponent as YellowRight} from '../../assets/images/yellow-right.svg';
import {ReactComponent as YellowLeft} from '../../assets/images/yellow-left.svg'
import {ReactComponent as Menubar} from '../../assets/images/Menubar.svg'
import {NavLink} from "react-router-dom"
import { ReactComponent as ActiveNavDash } from "../../assets/images/nav-link-dash.svg"


type headerProps = {
  title: string,
  text: string,
}

const navLinksArray = [
  "home",
  "about us",
  "services",
  "productions",
  "partners"
];

const Header = ({title, text}: headerProps) => {
  return (
    <header className="header">
      <section className="nav">
        <figure className="logo">
          <Logo />
        </figure>
        <nav className="nav__links">
          {navLinksArray.map((navItem: string) => {
            let words = navItem.split(" ");
            let newword : string;
            words.length == 2 ? newword = words[0] + "-" + words[1] : newword = navItem;
            console.log(newword);
            
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
        <figure className="menu-bar">
          <Menubar />
        </figure>
      </section>
      <section className="hero">
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
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