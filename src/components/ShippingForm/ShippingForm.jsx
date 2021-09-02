import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import useStyles from "./styles";
import { TextField, Grid, MenuItem, Button } from "@material-ui/core";
import AuthContext from "../../context/AuthContext";

function ShippingForm() {
  const classes = useStyles();

  const currentUser = useContext(AuthContext);
  return (
    <div>
      {currentUser !== null ? (
        <form className={classes.root}>
          <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                className={classes.input}
                required
                type="text"
                autoComplete="off"
                id="input"
                name="fullName"
                label="Full Name"
                variant="filled"
              />
              <TextField
                className={classes.input}
                required
                autoComplete="off"
                name="email"
                value={currentUser.email}
                label="Email"
                variant="filled"
              />
              <TextField
                className={classes.input}
                required
                autoComplete="off"
                name="Address"
                label="Address"
                type="Address"
                variant="filled"
              />
              <TextField
                className={classes.input}
                required
                name="Province"
                label="Province"
                variant="filled"
              ></TextField>
              <TextField
                className={classes.input}
                select
                required
                defaultValue="Country"
                name="country"
                label="Country"
                variant="filled"
              >
                <MenuItem value="Spain">Spain</MenuItem>
              </TextField>
              <Button
                type="submit"
                className={classes.buttons}
                variant="contained"
                color="primary"
              >
                Payment
              </Button>
              <Button
                className={classes.buttons}
                variant="contained"
                color="secondary"
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

export default ShippingForm;
