import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import data from "../data.json";
import Layout from "../components/Layout/Layout";
import HeaderLinks from "../components/Layout/HeaderLinks";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/bannerStyle.js";

export async function getStaticProps() {
  return {
    props: { data },
  };
}
const useStyles = makeStyles(styles);

export default function Index({ data }) {
  const dashboardRoutes = [];

  const classes = useStyles();

  return (
    <Layout
      color="transparent"
      routes={dashboardRoutes}
      brand="Material Kit React"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: "white",
      }}
      data={data}
    />
  );
}
