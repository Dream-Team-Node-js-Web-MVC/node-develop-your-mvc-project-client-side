import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "10ch",
    },
  },
  input: {
    fontSize: "5em",
  },
  buttons: {
    margin: theme.spacing(2),
    height: "50px",
    width: "100px",
  },
}));
