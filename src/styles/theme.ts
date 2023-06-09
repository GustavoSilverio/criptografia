import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(33, 33, 32, 1)",
        },
        secondary: {
            main: "rgba(236, 206, 66, 1)",
        },
        grey: {
            [100]: "rgba(191, 149, 0, 1)",
        }
    },
    typography: {
        fontFamily: "Inter, sans-serif"
    }
})