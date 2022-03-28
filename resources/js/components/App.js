import React from 'react';
import Layout from "../Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const themeWOM = createTheme({
    palette: {
        primary: {
            main: "#612D8A"
        },
        secondary: {
            main: "#E1017B"
        }
    }
});

const App = () => {
    return (
        <>
            <ThemeProvider theme={themeWOM}>
                <CssBaseline />
                <Layout />
            </ThemeProvider>
        </>
    );
};

export default App;
