/* JSX
ThemeBtn
*/

import { useAppContext } from "../context/AppContext";

import DarkThemeIcon from "../assets/icons/DarkTheme_icon.png";
import LightThemeIcon from "../assets/icons/LightTheme_icon.png";

export default function ThemeBtn() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <>
      <section id="ThemeBtn-cont">
        <img
          src={theme === "light" ? DarkThemeIcon : LightThemeIcon}
          alt="Theme_Icon"
          onClick={toggleTheme}
        />
        <p>{theme.toUpperCase()}</p>
      </section>
    </>
  );
}
