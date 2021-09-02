import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  section: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    height: "0%",
    width: "100%",
    marginTop: "20px",
    paddingTop: "56.25%", //16:9
  },
  title: {
    marginTop: "100px"
  },
  description: {
    marginTop: "25px",
    fontSize: "20px",
    marginRight: "10%"
  }
}));
