import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Router from "next/router";
import SyncLoader from "react-spinners/SyncLoader";

import "../styles/global.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [loading, setLoading] = useState(true);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#19857b",
      },
      background: { paper: "#2C394B", default: "#fff" },
    },
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    setTimeout(() => {
      setLoading(false);
    }, 500);
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return loading ? (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <SyncLoader color={"#170055"} loading={loading} size={35} />
    </div>
  ) : (
    <React.Fragment>
      <Head>
        <title>Students Assemble</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
