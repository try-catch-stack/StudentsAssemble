import React from "react";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/bannerStyle.js";
import Image from "next/image";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import Fade from "react-reveal/Fade";

export const Banner = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className="spacer layer1">
      <div className={classes.container}>
        <Fade>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h1 className={classes.title}>
                Avail the benefits of your institute email id
              </h1>
              <h3 className={classes.body}>
                Did you know that your institute email id provides you some
                amazing benefits? From free courses on Coursera , to getting
                discounts on Spotify and Apple music :) . You get much more than
                what you would expect.
              </h3>
              <h3 className={classes.body}>
                As most of these privileges are provided under the GitHub
                student developer pack , I would suggest you to first get your
                developer pack from{" "}
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
              </h3>
              <h3 className={classes.body}>
                Once you have got the pack, claiming these offers is as easy as
                registering on them with your institute email id and you shall
                be good to go.
              </h3>
              <br />
            </GridItem>
            <GridItem md={6}>
              <Hidden smDown>
                <Box align="center" justifyContent="center" pl={4}>
                  {/* <Image src="/design.gif" alt="Gif" width={400} height={400} /> */}
                  <img
                    src="/design.gif"
                    alt="Gif"
                    style={{ width: "80%", marginTop: "auto" }}
                  />
                </Box>
              </Hidden>
            </GridItem>
          </GridContainer>
        </Fade>
      </div>
    </div>
  );
};
export default Banner;
