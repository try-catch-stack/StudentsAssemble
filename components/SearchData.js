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
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  main: {
    // marginTop: "50px",
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
  searchField: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      width: "100%",
    },
  },
  searchInputField: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "32px",
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
  "Not in GitHub Dev pack",
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

    if (selectedTag != "All" && selectedTag != "Not in GitHub Dev pack") {
      setSearch("");
      const result = searcher.search(selectedTag);
      setData(result);
    } else if (selectedTag == "Not in GitHub Dev pack") {
      const result = searcher.search("Not in GitHub Dev pack");
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
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4} md={4}>
            <Hidden xsDown>
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
            </Hidden>
            <Hidden smUp>
              <Box className={classes.searchField}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={search}
                  className={classes.searchInputField}
                  spellCheck="false"
                />
              </Box>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={4} md={4}></Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box className={classes.selectMenu}>
              <FormControl className={classes.formControl}>
                <InputLabel id="controlled-open-select-label">Tags</InputLabel>
                <Select
                  labelId="controlled-open-select-label"
                  id="controlled-open-select"
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
        <Box className="listStart">
          <List currentdata={currentData} />
        </Box>
      </Container>
    </div>
  );
};
export default SearchData;
