import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    padding: "5%",
    "& .MuiCardMedia-root": {
      backgroundSize: "200px 700px !important"
    },
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    height: "80%",
    width: "80%",
    marginTop: "20px",
    paddingTop: "16.25%", //16:9
  },
  title: {
    marginTop: "100px",
  },
  description: {
    marginTop: "25px",
    fontSize: "15px",
    marginRight: "10%",
  },
  icon: {
    width: "40%",
    backgroundColor: "#FFCD00",
    marginTop: "4%",
  },
  back: {
    marginTop: "3%",
    backgroundColor: "#313131",
    color: "#FFFFFF",
  },
  input: {
    width: "50%",
    marginTop: "20px",
  }
}));
