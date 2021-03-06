/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import Button from "../CustomButtons/Button.js";

import styles from "../header-styles/headerLinksStyle.js";

import { scroller, animateScroll } from "react-scroll";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => animateScroll.scrollToTop()}
          color="transparent"
          className={classes.navLink}
        >
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() =>
            scroller.scrollTo("footer", {
              duration: 1000,
              delay: 0,
              smooth: "easeInOutQuart",
            })
          }
          color="transparent"
          className={classes.navLink}
        >
          Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/try-catch-stack/StudentsAssemble"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Contribute
        </Button>
      </ListItem>
    </List>
  );
}
