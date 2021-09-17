import {
    ImageStyle, StyleSheet, TextStyle, ViewStyle,
} from "react-native";
import { Theme } from "../types/Theme";
import useTheme from "./useTheme";

export interface Style { [key: string]: ViewStyle | TextStyle | ImageStyle }

export const makeStyle = <T extends Style>(applyTheme: (theme: Theme) => T): (() => T) => (): T => {
    const { theme } = useTheme();

    return useMemo(() =>  {
      const styles = applyTheme(theme);

     return StyleSheet.create(styles)
    }, [theme, applyTheme]);
};

export default makeStyle;
