import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(12),
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30ch",
    },
    display: "flex",
    flexDirection: "row",
    width: "80%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    margin: theme.spacing(2),
  },
  input: {
    fontSize: "5em",
  },
  buttons: {
    margin: theme.spacing(2),
    height: "50px",
    width: "100px",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
  },
}));
