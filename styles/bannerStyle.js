import { container, title } from "../components/material-ui-components";
const bannerStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    padding: "8rem",
    display: "flex",
    // margin: "2rem",
    maxHeight: "100vh",
    ...container,
  },

  title: {
    ...title,
    fontFamily: "Rampart One",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    // color: "#fff",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  a: {
    color: "#3DB2FF",
  },
  body: {
    // fontFamily: "Fira Sans",
  },
};

export default bannerStyle;
