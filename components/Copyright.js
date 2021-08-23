import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

export default function Copyright() {
  return (
    <div className="copyRight">
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="/">
          StudentsAssemble
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
