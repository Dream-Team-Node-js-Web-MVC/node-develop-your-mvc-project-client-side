import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
    justifyContent: "center",
    margin: "10% 25% 1%",
    border: "3px solid lightgrey",
    padding: "10px",
    width: "50%",
    color: "dimgray",
  },

  container: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
      textAlign: "center",
  }
}));
