import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",

    marginTop: "100px",
    marginLeft: "25%",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  input: {
    fontSize: "90px",
  },
  buttons: {
    margin: theme.spacing(1),
  },
}));
