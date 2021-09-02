import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import useStyles from './styles';

import axios from "axios";

const columns = [
    {
    field: 'id',
    headerName: 'Id',
    hide: "true",
    width: 200,
    editable: false,
    },
    {
    field: 'fullName',
    headerName: 'Full Name',
    width: 200,
    editable: true
    },
    {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
    },
    {
    field: 'password',
    headerName: 'Password',
    width: 200,
    editable: true,
    },
    {
    field: 'role',
    headerName: 'Role',
    type: 'singleSelect',
    valueOptions: [
        "employee",
        "admin"
    ],
    width: 200,
    editable: true,
    }
];

function DashboardGrid() {
    const classes = useStyles();

    let [workers, setWorkers] = useState([]);
    useEffect(() => {
        getWorkers();
    }, []);

    useEffect(() => {
    }, [workers]);

    const getWorkers = async () => {
        try {
            const workersData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/workers/`);
            setWorkers(workersData.data.data);
            
        } catch (err) {
            console.log('error = ',err);
        }
    }

    const dataRows = function () {
        let rows = [];
        workers.forEach((worker) => {
        let row = {id: worker._id, fullName: worker.fullName, email: worker.email, password: worker.password, role: worker.role};
        rows.push(row);
        });
        return rows;
    }

    const rows = dataRows();

    const handleEdit = async ({ id, field, value }) => {
        try {
            const modified = workers.filter(worker => worker._id === id);
            const patchedWorker = {...modified[0], [field]: value}
            await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/workers/${id}`, patchedWorker);
            setWorkers(workers.map((worker) => {
                if(worker._id === id) {
                    worker = {...worker, [field]: value};
                    
                }
                return worker;
            }));
        } catch (error) {
            console.log("error = ", error)
        }
    };

    const selectedRows = (id) => {
        console.log(id);
        return id;
    };
    /* const remove = async (event, a, b, selectedRows) => {
        console.log(selectedRows[0]);
    } */


    return (
        <div className={classes.root}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            //checkboxSelection
            //disableSelectionOnClick
            onCellEditCommit={handleEdit}
            onSelectionModelChange={selectedRows}
        />
            <Button  className={classes.buttons}  variant="contained" color="primary">Create</Button>
            <Button className={classes.buttons} variant="contained" color="secondary" /* onClick={remove} */ >Remove</Button>
        </div>
    )
}

export default DashboardGrid
