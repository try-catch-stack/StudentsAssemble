import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Copyright from "../src/Copyright";
import FuzzySearch from "fuzzy-search";
import SearchData from "../components/SearchData";
import data from "../data.json";
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/bannerStyle.js";
import Banner from "../components/Banner";

export async function getStaticProps() {
  return {
    props: { data },
  };
}
const useStyles = makeStyles(styles);

export default function Index({ data }) {
  const [currentData, setData] = useState(data);
  const [searchInput, setSearch] = useState("");

  const dashboardRoutes = [];

  const classes = useStyles();

  const search = (e) => {
    setSearch(e.target.value);
    const searcher = new FuzzySearch(data, ["name"]);
    const result = searcher.search(e.target.value);
    setData(result);
  };

  return (
    <Container maxWidth="lg">
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Banner />
      <SearchData data={data} />
      <Copyright />
    </Container>
  );
}
