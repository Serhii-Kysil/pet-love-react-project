import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.desktopNav}>
        <Navigation />
        <AuthNav />
      </div>
      <div className={css.mobileNav}>
        <BurgerMenu>
          <Navigation />
          <AuthNav />
        </BurgerMenu>
      </div>
    </header>
  );
};
