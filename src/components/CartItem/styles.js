import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    margin: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "1px",
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
  price: {
    padding: "15%",
    backgroundColor: "#f1f1f1",
    width: "100%",
  },
  total: {
    padding: "5px",
  },
}));
