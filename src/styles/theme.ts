import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(255, 237, 172, 1)",
        },
        secondary: {
            main: "rgba(255, 199, 0, 1)",
        },
        grey: {
            [100]: "rgba(191, 149, 0, 1)",
        }
    },
    typography: {
        fontFamily: "Inter, sans-serif"
    }
})