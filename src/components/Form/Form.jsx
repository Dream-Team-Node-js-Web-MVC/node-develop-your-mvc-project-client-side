import React, { useState } from 'react'
import useStyles from './styles' 
import { TextField, Grid, MenuItem,Button } from "@material-ui/core";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Form() {

    const [newEmployee, setNewEmployee] = useState({fullName: "",email:"", password:"",role:"",profileImage:""});
    const history = useHistory();

    const handleChange = (event) => {
        setNewEmployee({...newEmployee, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postEmployee();
        setNewEmployee({fullName: "",email:"", password:"",role:"",profileImage:""})
        console.log(newEmployee)
        
    }

    const handleClear = () => {
        setNewEmployee({fullName: "",email:"", password:"",role:"",profileImage:""})
    }

    const postEmployee = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/workers/`, newEmployee)
            .then(() => {
                history.push('/dashboard');
            });

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
                    required
                    onChange={handleChange}
                    type="text"
                    value={newEmployee.fullName}
                    autoComplete="off"
                    id="input"
                    name="fullName"
                    label="Full Name"
                    variant="filled"
                />
                <TextField className={classes.input}
                    onChange={handleChange}
                    required
                    value={newEmployee.email}
                    autoComplete="off"
                    name="email"
                    label="Email"
                    variant="filled"
                />
                <TextField className={classes.input}
                    onChange={handleChange}
                    required
                    value={newEmployee.password}
                    autoComplete="off"
                    name="password"
                    label="Password"
                    type="password"
                    variant="filled"
                />
                <TextField className={classes.input}
                    select
                    required
                    value={newEmployee.role}
                    onChange={handleChange}
                    defaultValue="employee"
                    name="role"
                    label="Role"
                    variant="filled"
                >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="employee">Employee</MenuItem>
                </TextField>  
                    <Button type="submit" className={classes.buttons}   variant="contained" color="primary" >Submit</Button>
                    <Button className={classes.buttons} variant="contained" color="secondary" onClick={handleClear} >Clear</Button>
            </Grid>
        </Grid>
    </form>
</>     
    )
}

export default Form
