import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImgCard from "./Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ReactPaginate from "react-paginate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

export default function List({ currentdata }) {
  const classes = useStyles();

  const [startIndex, setStartIndex] = useState(0);
  const [currentData, setData] = useState(currentdata);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(
    Math.ceil(currentdata.length / perPage)
  );

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setStartIndex(selectedPage * perPage);
  }; //Pagination

  // useEffect(() => {
  //   setData(currentdata.slice(startIndex, startIndex + perPage));
  //   setPageCount(Math.ceil(currentdata.length / perPage));
  // }, [startIndex, currentData]);

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
                <Box display="flex" justifyContent="center" alignItems="center">
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
        <ReactPaginate
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
        />
      </Box>
    </div>
  );
}
