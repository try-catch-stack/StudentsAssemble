import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImgCard from "./Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Pagination } from "@material-ui/lab";
import { scroller, animateScroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

export default function List({ currentdata }) {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setData] = useState(currentdata);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(
    Math.ceil(currentdata.length / perPage)
  );

  useEffect(() => {
    const endIndex = currentPage * perPage;
    const startIndex = endIndex - perPage;
    setData(currentdata.slice(startIndex, endIndex));
    setPageCount(Math.ceil(currentdata.length / perPage));
  }, [currentPage]);

  useEffect(() => {
    const endIndex = perPage;
    const startIndex = 0;
    setData(currentdata.slice(startIndex, endIndex));
    setPageCount(Math.ceil(currentdata.length / perPage));
    setCurrentPage(1);
  }, [currentdata]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        {currentData.length > 1
          ? currentData.map((cardData) => {
              return (
                <Grid item sm={12} md={6} key={cardData.id}>
                  <ImgCard cardData={cardData} />
                </Grid>
              );
            })
          : currentData.map((cardData) => {
              return (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={cardData.id}
                  mx="auto"
                >
                  <Grid item sm={12} md={6} key={cardData.id}>
                    <ImgCard cardData={cardData} />
                  </Grid>
                </Box>
              );
            })}
      </Grid>
      {currentData.length == 0 ? (
        <Box alignItems="center" justifyContent="center" display="flex" p={2}>
          <Typography>No results found!</Typography>
        </Box>
      ) : null}
      <Box alignItems="center" justifyContent="center" display="flex" m={4}>
        <Pagination
          count={10}
          color="primary"
          defaultPage={1}
          boundaryCount={1}
          count={pageCount}
          page={currentPage}
          onChange={(e, page) => {
            setCurrentPage(page);
            scroller.scrollTo("listStart", {
              duration: 800,
              delay: 0,
              smooth: "easeInOutQuart",
              offset: -50,
            });
          }}
        />
      </Box>
    </div>
  );
}
