import { useContext } from "react";
import ThemeContext from "./themeContext";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
