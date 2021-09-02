import React, { useState } from 'react'
import useStyles from './styles' 
import { TextField, Grid, MenuItem,Button } from "@material-ui/core";
import axios from 'axios';
function Form() {

    const [newEmployee, setNewEmployee] = useState({fullName: "",email:"", password:"",role:"",profileImage:""});

    const handleChange = (event) => {
        setNewEmployee({...newEmployee, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postEmployee();
        console.log(newEmployee)
        
    }

    const postEmployee = async () => {
        try {
             const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/workers/`, newEmployee)

             console.log(response)

        } catch (error) {
            
        }
    }

    const classes = useStyles();
    return (
        <>
        <form className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={3} >
            <TextField className={classes.input}
            onChange={handleChange}
            autoComplete="off"
             name="fullName"
            label="Full Name"
            variant="filled"
             />
              <TextField className={classes.input}
               onChange={handleChange}
               autoComplete="off"
             name="email"
            label="Email"
            variant="filled"
             />
            <TextField className={classes.input}
             onChange={handleChange}
             autoComplete="off"
             name="password"
            label="Password"
            type="password"
            variant="filled"
             />
            <TextField className={classes.input}
            select
            onChange={handleChange}
            defaultValue="employee"
             name="role"
            label="Role"
            variant="filled"
             >
             <MenuItem value="admin">Admin</MenuItem>
             <MenuItem value="employee">Employee</MenuItem>
             </TextField>  
                 <Button type="submit" className={classes.buttons}   variant="contained" color="primary">Submit</Button>
                 <Button className={classes.buttons} variant="contained" color="secondary" >Clear</Button>
             </Grid>
             </Grid>
           
        </form>
        </>
        
    )
}

export default Form
