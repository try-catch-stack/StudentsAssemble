import React from "react";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/bannerStyle.js";
import Chip from "@material-ui/core/Chip";

export const Banner = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h1 className={classes.title}>
            Avail the benefits of your institute email id
          </h1>
          <h4>
            Did you know that your institute email id provides you some amazing
            benefits? From free courses on Coursera , to getting discounts on
            spotify and apple music :) and a lot more. You get much more than
            what you would expect.
          </h4>
          <h4>
            As most of these privileges are provided under the GitHub student
            developer pack (I have added the tag{" "}
            <Chip variant="outlined" label="Github Dev pack" size="small" />{" "}
            with those) , I would suggest you to first get your developer pack
            from{" "}
            <Button
              color="github"
              size="sm"
              href="https://education.github.com/benefits?type=student"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={" fab fa-github"} />
              Student Developer Pack
            </Button>
          </h4>
          <h4>
            Once you have got the pack, claiming these offers is as easy as
            registering on them with your institute email id and you shall be
            good to go. Once you have got the pack, claiming these offers is as
            easy as registering on them with your institute email id and you
            shall be good to go.
          </h4>
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default Banner;