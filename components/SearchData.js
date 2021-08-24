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
import { Grid } from "@material-ui/core";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "50px",
    // paddingTop: theme.spacing(7),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  selectMenu: {
    // margin: theme.spacing(1),
    // minWidth: "80%",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(4),
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
      width: "100%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    minWidth: "100%",
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
  "Music",
  "Github Dev pack",
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
    <div className={classes.main}>
      <Container>
        <ThemeProvider theme={(theme) => ({ darkMode: true, ...theme })}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-full-width"
                label="Search"
                style={{
                  margin: theme.spacing(4),
                  maxWidth: "100%",
                  minWidth: "80%",
                }}
                placeholder="Name"
                display="inline"
                value={searchInput}
                onChange={search}
                margin="normal"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box className={classes.selectMenu}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Tags
                  </InputLabel>
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
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
        <Box className="listStart">
          <List currentdata={currentData} />
        </Box>
      </Container>
    </div>
  );
};
export default SearchData;
