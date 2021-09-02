import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState, useCallback} from 'react';
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

/* const rows = [
    {id: 1, fullName: "Jordi Arnau", email: "jordi@mail.com", password: "123456", role: "employee"},
    {id: 2, fullName: "Jordi Arnau", email: "jordi@mail.com", password: "123456", role: "employee"},
    {id: 3, fullName: "Jordi Arnau", email: "jordi@mail.com", password: "123456", role: "employee"},
    {id: 4, fullName: "Jordi Arnau", email: "jordi@mail.com", password: "123456", role: "employee"},
    {id: 5, fullName: "Jordi Arnau", email: "jordi@mail.com", password: "123456", role: "employee"},
    {id: 6, fullName: "Jordi Arnau", email: "jordi@mail.com", password: "123456", role: "employee"},
    {id: 7, fullName: "Jordi Arnau", email: "jordi@mail.com", password: "123456", role: "employee"}
]; */

function DashboardGrid() {
    const classes = useStyles();

    let [workers, setWorkers] = useState([]);
    useEffect(() => {
        getWorkers();
    }, []);

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
    
    /* const handleEditCommit = useCallback((new) => {
        console.log(new);
    }, []); */

    const handleEditCommit = useCallback(
        ({ id, field, value }) => {
          console.log(id);
          console.log(field);
          console.log(value);
          setWorkers([...workers] field: value)
        },
        [workers],
      );

    return (
        <div className={classes.root}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            //onCellEditStop={handleEdit}
            onCellEditCommit={handleEditCommit}
        />
        </div>
    )
}

export default DashboardGrid
