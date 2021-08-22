import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Fade from "react-reveal/Fade";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    borderRadius: "15px",
  },
});

export default function ImgCard({ cardData }) {
  const theme = useTheme();
  const classes = useStyles();
  const { id, name, img, desc, benefit, tags, link } = cardData;
  return (
    <Fade>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="100%"
            src={img}
            title={name}
          />
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              {desc}
            </Typography>
            <Typography gutterBottom variant="h1" component="h2"></Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              <b>Benefit : </b>
              {benefit}
            </Typography>
          </CardContent>
          <Box p={1}>
            {tags.map((tag) => {
              return (
                <Box display="inline" mr={1} key={tag}>
                  <Chip variant="outlined" size="small" label={tag} />
                </Box>
              );
            })}
          </Box>
        </CardActionArea>
        <CardActions>
          <Button size="small" href={link}>
            Apply
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}
