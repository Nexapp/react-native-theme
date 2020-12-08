# @nexapp/react-native-theme
A simple library to handle theming in react native using typescript. 

### Usage
#### ThemeProvider
Ensure to wrap your app with the ThemeProvider. It will need an initial theme. For the moment you will have to keep your themes somewhere in your app as a typescript object. Be sure to use the typing to ensure you have all the required properties for a theme. When your app boots, import the default theme and inject it to the ThemeProvider. Then, depending on your use-case, you can switch the theme however you like using the ThemeProvider or the hook.

```jsx
import { ThemeProvider } from "@nexapp/react-native-theme"
import yourTheme from "src/config/theming/theme.default.ts"

export default App : React.FC = () => (
    <ThemeProvider initialTheme={yourTheme}>
        <AppContainer/>
    </ThemeProvider>
)
```

#### makeStyle
To have access to your theme in your stylesheets you can use the `makeStyle` helper method.

```jsx
import { makeStyle } from "@nexapp/react-native-theme"

const useStyle = makeStyle((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.layout.tile
  },
  section: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const component: React.FC = () => {
    const styles = useStyle()

    return (
        <View style={styles.container}>
            <View style={styles.section}/>
        </View>
    )
}
```

#### useTheme
To have access to your theme anywhere else you can use the `useTheme` hook. It exposes the exact same attributes than the provider.

```jsx
import { useTheme } from "@nexapp/react-native-theme"
import yourTheme from "src/config/theming/theme.default.ts"
import yourOtherTheme from "src/config/theming/theme.custom.ts"

const component: React.FC = () => {
    const {theme, setTheme} = useTheme()

    return (
        <>
            <Button onPress={() => setTheme(yourTheme)}>
                <Text>Set default theme</Text>
            </Button>

            <Button onPress={() => setTheme(yourOtherTheme)}>
                <Text>Set custom theme</Text>
            </Button>
        </>
    )
}
```
