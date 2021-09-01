import React from 'react'
import useStyles from './styles' 
import { TextField, Grid, MenuItem,Button } from "@material-ui/core";
function Form() {
    const classes = useStyles();
    return (
        <>
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3} >
            <TextField className={classes.input}
             name="fullName"
            label="Full Name"
            variant="filled"
             />
              <TextField className={classes.input}
             name="email"
            label="Email"
            variant="filled"
             />
            <TextField className={classes.input}
             name="password"
            label="Password"
            type="password"
            variant="filled"
             />
            <TextField className={classes.input}
            select
             name="role"
            label="Role"
            variant="filled"
             >
             <MenuItem value="admin">Admin</MenuItem>
             <MenuItem value="employee">Employee</MenuItem>
             </TextField>  
                 <Button  className={classes.buttons}  variant="contained" color="primary">Submit</Button>
                 <Button className={classes.buttons} variant="contained" color="secondary" >Clear</Button>
             </Grid>
             </Grid>
           
        </form>
        </>
        
    )
}

export default Form
