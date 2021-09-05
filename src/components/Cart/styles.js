import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    flexGrow: 1,
    padding: theme.spacing(10),
  },
  paper: {
    
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
  item: {
    padding: "2%",
    backgroundColor: "#FFFFFF",
    margin: "20px",
    width: "400px",
    boxShadow: "0px 0px 5px 0px rgba(217,213,217,1)",
    borderRadius: "4px"
  },
  empty: {
    padding: "5%"
  },
  summary: {
    padding: "3%",
    position: "fixed",
    marginLeft: "70%"
  }
}));
