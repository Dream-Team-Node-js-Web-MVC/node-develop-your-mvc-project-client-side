import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
