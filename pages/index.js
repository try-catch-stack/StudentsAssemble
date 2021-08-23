import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import data from "../data.json";
import Header from "../components/Header/Header";
import Banner from "../components/Banner";
import SearchData from "../components/SearchData";
import Copyright from "../src/Copyright";
import HeaderLinks from "../components/Header/HeaderLinks";
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
    <>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="StudentsAssemble"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Banner />
      <div className="spacer2 layer2">
        <SearchData data={data} />
        <Copyright />
      </div>
    </>
  );
}
