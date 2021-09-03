import { yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    minWidth: "70%",
    background: "transparent"
  },
  name: {
    marginTop: "30px",
    marginLeft: "15px",
  },
  textSize: {
    fontSize: "15px",
    height: "130px",
    overflow: "hidden",
    marginBottom: "10px",
    color: "#FFFFFF"
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
    marginBottom: "25px",
  },
  goTo: {
    backgroundColor: "#FFCD00"
  },
  price: {
    color: "#FFFFFF",
    fontWeight: "bolder"
  },
  cardContentTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContentBottom: {
    height: "220px",
    backgroundColor: '#00241b',
    padding: "10%",
    borderRadius: "2%"
  },
  icon: {
    color: "#FFFFFF"
  }
}));
