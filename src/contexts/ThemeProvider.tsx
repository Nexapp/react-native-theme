import React, { createContext, useState } from "react";
import { Theme } from "../types/Theme";

export interface ThemeContextProps {
  initialTheme: Theme
}

export interface ThemeResult {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeStateContext = createContext<ThemeResult>({} as any);

const ThemeProvider: React.FC<ThemeContextProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    return (
      <ThemeStateContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeStateContext.Provider>
  );
};

export default ThemeProvider;
