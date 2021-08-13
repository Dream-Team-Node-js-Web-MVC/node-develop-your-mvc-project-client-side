import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  logo:{
    maxWidth: 300,
    marginRight: '10px'
  },
  beer_image:{
    maxWidth: 500,
  },
  left_section: {
    background: '#FFBD00',
  },
  primary_text: {
    color: '#FFFFFF',
    fontSize: '55px',
    fontWeight: 'bold',
    padding: '10%',
    fontFamily: 'Montserrat',
  },
  paper: {
    margin: theme.spacing(20, 20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
