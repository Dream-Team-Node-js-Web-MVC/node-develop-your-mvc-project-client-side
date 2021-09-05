import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "10%",
    marginLeft: "5%",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "15ch",
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
