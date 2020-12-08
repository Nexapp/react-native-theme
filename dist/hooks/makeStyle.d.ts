import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Theme } from "../types/Theme";
export interface Style {
    [key: string]: ViewStyle | TextStyle | ImageStyle;
}
export declare const makeStyle: <T extends Style>(applyTheme: (theme: Theme) => T) => () => T;
export default makeStyle;
