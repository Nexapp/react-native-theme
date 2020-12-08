import { useContext } from "react";
import { ThemeResult, ThemeStateContext } from "../contexts/ThemeProvider";

const useTheme = (): ThemeResult => { 
    const {theme, setTheme} = useContext(ThemeStateContext);
    return {
        theme, 
        setTheme
    }
};

export default useTheme;
