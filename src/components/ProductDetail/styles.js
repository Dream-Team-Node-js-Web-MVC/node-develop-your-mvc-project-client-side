import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    padding: "5%",
    position: "fixed"
  },
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
  },
  icon: {
    width: "40%",
    backgroundColor: "#FFCD00",
    marginTop: "4%"
  },
  back: {
    marginTop: "3%",
    backgroundColor: "#313131",
    color: "#FFFFFF"
  }
}));
