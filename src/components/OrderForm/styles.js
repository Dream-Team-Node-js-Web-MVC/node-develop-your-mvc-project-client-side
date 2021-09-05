import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
    margin: "10% 25% 1%",
    padding: "10px",
    width: "50%",
    color: "black",
  },
  button: {

  },
  info: {
    width: "100%",
    display: "flex"
  },
}));
