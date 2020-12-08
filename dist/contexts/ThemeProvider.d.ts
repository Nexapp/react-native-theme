import React from "react";
import { Theme } from "../types/Theme";
export interface ThemeContextProps {
    initialTheme: Theme;
}
export interface ThemeResult {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeStateContext: React.Context<ThemeResult>;
declare const ThemeProvider: React.FC<ThemeContextProps>;
export default ThemeProvider;
