import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#E3FDFD",
        color: "#000",
        minHeight: "70px",
        padding: "10px",
      }}
    >
      <Box align="center">
        <Typography align="center" display="inline">
          Made with{" "}
        </Typography>
        <lord-icon
          src="https://cdn.lordicon.com/rjzlnunf.json"
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: "20px", height: "20px" }}
        ></lord-icon>{" "}
        by Danish
        <Typography variant="h5" align="center" display="block">
          <a href="https://github.com/try-catch-stack" target="_blank">
            <i className="fab fa-github" style={{ margin: "10px 10px" }} />
          </a>
          <a href="https://www.linkedin.com/in/danish306/" target="_blank">
            <i className="fab fa-linkedin" style={{ margin: "10px 10px" }} />
          </a>
          <a href="https://www.instagram.com/dan1sh_m1rza/" target="_blank">
            <i className="fab fa-instagram" style={{ margin: "10px 10px" }} />
          </a>
        </Typography>
        <Typography variant="body2" align="center">
          {"Copyright © "}
          <MuiLink color="inherit" href="/">
            StudentsAssemble
          </MuiLink>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </div>
  );
}
