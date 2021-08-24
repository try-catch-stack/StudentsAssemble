import React from "react";
import data from "../data.json";
import Header from "../components/Header/Header";
import Banner from "../components/Banner";
import SearchData from "../components/SearchData";
import Footer from "../components/Footer";
import HeaderLinks from "../components/Header/HeaderLinks";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/bannerStyle.js";

export async function getStaticProps() {
  return {
    props: { data },
  };
}

export default function Index({ data }) {
  return (
    <div className="wrapper">
      <Header
        color="transparent"
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
        <Footer />
      </div>
    </div>
  );
}
