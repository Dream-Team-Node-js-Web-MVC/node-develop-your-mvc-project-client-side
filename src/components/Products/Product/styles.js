import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    minWidth: "70%",
  },
  name: {
    marginTop: "30px",
    marginLeft: "15px",
  },
  textSize: {
    fontSize: "15px",
    height: "130px",
    overflow: "hidden",
  },
  media: {
    height: "85px",
    width: "85px",
    justifyContent: "flex-start",
    zIndex: 1000,
    paddingTop: "56.25%", //16:9
    marginRight: "25px",
    marginBottom: "10px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
  },
  cardContentTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContentBottom: {
    height: "220px",
  },
}));
