import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
      padding: "2%",
      width: "95%",
      marginTop: "10px"
  },
  date: {
      padding: "2%",
      marginTop: "10px",
  },
  cvv: {
      padding: "2%",
      width: "30%",
      marginLeft: "10px"
  },
  submit: {
      padding: "2%",
      marginTop: "10px"
  },
}));
