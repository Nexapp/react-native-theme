interface Alerts {
    warning: AlertColors;
    information: AlertColors;
    danger: AlertColors;
    success: AlertColors;
}

interface AlertColors {
    primary: string;
    secondary: string;
}

interface LayoutColors {
    tile: string;
    background: string;
    premium: string;
}

interface ActionsColors {
    primary: string;
    secondary: string;
    tertiary: string;
}

interface GradientColors {
    start: string;
    end: string;
}

interface TypographyColors {
    emphasis: {
        high: string;
        medium: string;
    };
    disabled: string;
    inverted: string;
    links: string;
}

interface ColorGuide {
    layout: LayoutColors;
    alerts: Alerts;
    actions: {
        common: Omit<ActionsColors, "tertiary">;
    };
    gradient: {
        common: GradientColors;
    };
    typography: TypographyColors;
}

interface TypographyGuide {
    font: {
        light: string;
        semiBold: string;
        bold: string;
        regular: string;
    };
    size: {
        overline: number;
        captation: number;
        button: number;
        body: {
            small: number;
            medium: number;
            large: number;
        };
        subtitle: {
            small: number;
            medium: number;
            large: number;
        };
        headline: {
            h6: number;
            h5: number;
            h4: number;
            h3: number;
            h2: number;
            h1: number;
        };
    };
}

interface SpacingGuide {
    xxxs: number;
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
}

export interface StyleGuide {
    colors: ColorGuide;
    typography: TypographyGuide;
    spacing: SpacingGuide;
}

interface BrandedColorGuide {
    actions: {
        brand: ActionsColors;
    };
    gradient: {
        brand: GradientColors;
    };
}

export interface BrandedStyleGuide {
    colors: BrandedColorGuide;
}

export type Theme = BrandedStyleGuide & StyleGuide