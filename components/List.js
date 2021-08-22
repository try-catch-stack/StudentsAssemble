import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImgCard from "./Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

export default function List({ currentdata }) {
  const classes = useStyles();

  const [startIndex, setStartIndex] = useState(0);
  // const [currentData, setData] = useState(currentdata);
  const [perPage] = useState(10);
  // const [pageCount, setPageCount] = useState(
  //   Math.ceil(currentData.length / perPage)
  // );

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setStartIndex(selectedPage * perPage);
  }; //Pagination

  // useEffect(() => {
  //   setData(currentdata.slice(startIndex, startIndex + perPage));
  //   setPageCount(Math.ceil(currentdata.length / perPage));
  // }, [startIndex, currentdata]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        {currentdata.length > 1
          ? currentdata.map((cardData) => {
              return (
                <Grid item sm={12} md={6} key={cardData.id}>
                  <ImgCard cardData={cardData} />
                </Grid>
              );
            })
          : currentdata.map((cardData) => {
              return (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={cardData.id}
                >
                  <Grid item sm={12} md={6} key={cardData.id}>
                    <ImgCard cardData={cardData} />
                  </Grid>
                </Box>
              );
            })}
      </Grid>
      {currentdata.length == 0 ? (
        <Box alignItems="center" justifyContent="center" display="flex" p={2}>
          <Typography>No results found!</Typography>
        </Box>
      ) : null}
      <Box alignItems="center" justifyContent="center" display="flex" m={4}>
        {/* <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        /> */}
      </Box>
    </div>
  );
}
