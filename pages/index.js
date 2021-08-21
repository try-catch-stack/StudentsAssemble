import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "../src/Copyright";
import List from "../components/List";
import TextField from "@material-ui/core/TextField";
import FuzzySearch from "fuzzy-search";
import SearchData from "../components/SearchData";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default function Index({ data }) {
  const [currentData, setData] = useState(data);
  const [searchInput, setSearch] = useState("");

  const search = (e) => {
    setSearch(e.target.value);
    const searcher = new FuzzySearch(data, ["name"]);
    const result = searcher.search(e.target.value);
    setData(result);
  };

  return (
    <Container maxWidth="lg">
      <Box alignContent="center">
        <Typography
          variant="h4"
          color="textPrimary"
          component="h4"
        ></Typography>
        <Typography
          variant="h4"
          color="textPrimary"
          component="h4"
        ></Typography>
      </Box>
      <SearchData data={data} />
      <Copyright />
    </Container>
  );
}
