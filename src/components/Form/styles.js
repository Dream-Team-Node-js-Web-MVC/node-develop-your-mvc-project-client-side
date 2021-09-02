import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    marginLeft: "25%",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  input: {
    fontSize: "5em",
  },
  buttons: {
    margin: theme.spacing(2),
    height: "50px",
    width: "80px",
  },
}));
