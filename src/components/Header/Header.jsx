import { Logo } from "../Logo/Logo";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
    </header>
  );
};
