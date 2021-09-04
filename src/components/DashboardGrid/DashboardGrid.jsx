import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import React, {useEffect, useState} from 'react';
import useStyles from './styles';

import axios from "axios";

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
        valueFormatter: () => {
            return "*********";
        },
        filterable: false,
        sortable: false,
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
        },
        {
            field: 'actions',
            headerName: 'Remove',
            renderCell: function IconToolbar(props) {

                const { id } = props;
                
                const remove = async () => {
                    await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/workers/${id}`);
                    const remainingWorkers = workers.filter(worker => worker._id !== id);
                    setWorkers(remainingWorkers);
                }
            
                return (
                    <div>
                    <IconButton
                        color="inherit"
                        size="small"
                        aria-label="delete"
                        onClick={remove}
            
                    >
                    <DeleteIcon fontSize="small" />
                    </IconButton>
                    </div>
                )
            },
            sortable: false,
            width: 100,
            filterable: false,
            align: 'center',
            disableColumnMenu: true,
            disableReorder: true,
        },
    ];

    const handleEdit = async ({ id, field, value }) => {
        try {
            const modified = workers.filter(worker => worker._id === id);
            const patchedWorker = {...modified[0], [field]: value}
            console.log(workers);
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

    return (
        <div className={classes.root}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onCellEditCommit={handleEdit}
            disableSelectionOnClick
        />
            <NavLink exact to="/newworker">
            <Button  className={classes.buttons}  variant="contained" color="primary">Create</Button>
            </NavLink>
            </div>
    )
}

export default DashboardGrid
