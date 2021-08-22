import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FuzzySearch from "fuzzy-search";
import List from "./List";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { Typography, Grid } from "@material-ui/core";
import theme from "../src/theme";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
      width: "100%",
    },
  },
}));

const tags = [
  "Cloud",
  "Design",
  "Developer tools",
  "Domains",
  "Infrastructure & APIs",
  "Internet of Things",
  "Learn",
  "Marketing",
  "Mobile",
  "Courses",
  "Productivity",
  "Virtual Events",
  "Security & analytics",
];

export const SearchData = ({ data }) => {
  const [currentData, setData] = useState(data);
  const [searchInput, setSearch] = useState("");

  const search = (e) => {
    setSearch(e.target.value);
    setTag("All");
    const searcher = new FuzzySearch(data, ["name"]);
    const result = searcher.search(e.target.value);
    setData(result);
  };

  const classes = useStyles();
  const [tag, setTag] = React.useState("All");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setTag(event.target.value);
    let selectedTag = event.target.value;
    const searcher = new FuzzySearch(data, ["tags"]);

    if (selectedTag != "All") {
      setSearch("");
      const result = searcher.search(selectedTag);
      setData(result);
    } else {
      setData(data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            id="outlined-full-width"
            label="Search"
            style={{ margin: theme.spacing(4) }}
            placeholder="Name"
            display="inline"
            value={searchInput}
            onChange={search}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}></Grid>
        <Grid item xs={12} sm={4} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Tags</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={tag}
              onChange={handleChange}
            >
              <MenuItem value="All">
                <em>All</em>
              </MenuItem>
              {tags.map((tag) => {
                return (
                  <MenuItem value={tag} key={tag}>
                    <Chip variant="outlined" label={tag} />
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box border={1}>
        <List currentdata={currentData} />
      </Box>
    </Container>
  );
};
export default SearchData;
