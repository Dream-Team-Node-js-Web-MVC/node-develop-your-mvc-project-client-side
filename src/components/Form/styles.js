import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "8%",
    marginLeft: "5%",
    "& .MuiTextField-root": {
      marginTop: "10px",
      width: "10ch",
      backgroundSize: "auto !important"
    },
  },
  input: {
    fontSize: "5em",
  },
  buttons: {
    marginTop: "20px",
    marginRight: "20px",
    height: "50px",
    width: "80px",
  },
}));
