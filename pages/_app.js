import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import theme from "../src/theme";
import "../styles/global.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      type: "light",
    },
  });

  const [currentTheme, setTheme] = useState(darkTheme);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Students Assemble</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={currentTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Button
          onClick={() => {
            if (currentTheme.palette.type == "dark") {
              setTheme(lightTheme);
            } else if (currentTheme.palette.type == "light") {
              setTheme(darkTheme);
            }
          }}
        >
          Toggle
        </Button>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
