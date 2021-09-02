import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { syncUserData } from "../../utils/authRequest";
import {
  signInWithGoogle,
  signInWithEmailAndPassword,
} from "../../services/auth";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/logo.jpeg";
import beerImage from "../../assets/beer-duo.png";
import useStyles from "./styles";
import "./Login.css";

function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleLoginWithGoogle(e) {
    e.preventDefault();
    console.log("hello");
    setLoading(true);
    setLoggedIn(false);

    try {
      await signInWithGoogle();
      await syncUserData();
      setLoggedIn(true);
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    setLoggedIn(false);

    try {
      await signInWithEmailAndPassword(email, password);
      await syncUserData();
      setLoggedIn(true);
      console.log(email);
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  }
  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        xs={false}
        sm={4}
        md={6}
        className={classes.left_section}
      >
        <Typography
          component="h2"
          variant="h2"
          className={classes.primary_text}
        >
          Beer! The cause of and the solution to all of life’s problems
        </Typography>
        <img
          src={beerImage}
          alt="Kitty Katty!"
          className={classes.beer_image}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Paper} square>
        <div className={classes.paper}>
          <img src={logo} alt="Kitty Katty!" className={classes.logo} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleLoginWithGoogle}
            >
              Sign In With Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
