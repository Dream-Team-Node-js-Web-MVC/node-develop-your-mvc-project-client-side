import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Button } from "@material-ui/core";
import { useHistory, NavLink } from 'react-router-dom';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import React, {useEffect, useState} from 'react';
import useStyles from './styles';

import axios from "axios";

function ProductsGrid() {
    const classes = useStyles();

    const history = useHistory();

    let [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
    }, [products]);

    const getProducts = async () => {
        try {
            const productsData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/`);
            setProducts(productsData.data.data);
            
        } catch (err) {
            console.log('error = ',err);
        }
    }

    const dataRows = function () {
        let rows = [];
        products.forEach((product) => {
        let row = {
            id: product._id,
            title: product.title,
            description: product.description,
            country: product.country,
            sixprice: product.price[0].packPrice,
            twelveprice: product.price[1].packPrice,
            twentyfourprice: product.price[2].packPrice,
            images: product.images,
        };
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
        field: 'title',
        headerName: 'Title',
        width: 150,
        editable: false,
        filterable: true,
        sortable: true,
        },
        {
        field: 'description',
        headerName: 'Description',
        width: 200,
        editable: false,
        },
        {
        field: 'country',
        headerName: 'Country',
        width: 150,
        editable: false,
        filterable: true,
        sortable: true,
        },
        {
        field: 'sixprice',
        headerName: '6 Pack price',
        width: 130,
        editable: false,
        valueFormatter: (item) => {
            const finalNum = Number(item.row.sixprice)+"€";
            return finalNum;
        },
        },
        {
            field: 'twelveprice',
            headerName: '12 Pack price',
            width: 130,
            editable: false,
            valueFormatter: (item) => {
                const finalNum = Number(item.row.twelveprice)+"€";
                return finalNum;
            },
        },
        {
            field: 'twentyfourprice',
            headerName: '24 Pack price',
            width: 130,
            editable: false,
            valueFormatter: (item) => {
                const finalNum = Number(item.row.twentyfourprice)+"€";
                return finalNum;
            },
        },
        {
            field: 'images',
            headerName: 'Images',
            width: 200,
            editable: false,
        },
        {
            field: 'edit',
            headerName: 'Edit',
            renderCell: function EditToolbar(props) {

                const { id } = props;
                
            
                return (
                    <div>
                    <IconButton
                        color="inherit"
                        size="small"
                        aria-label="delete"
                        onClick={() => history.push(`/editProduct/${id}`)}
            
                    >
                    <EditOutlinedIcon fontSize="small" />
                    </IconButton>
                    </div>
                )
            },
            sortable: false,
            width: 50,
            filterable: false,
            align: 'center',
            disableColumnMenu: true,
            disableReorder: true,
        },
        {
            field: 'actions',
            headerName: 'Remove',
            renderCell: function IconToolbar(props) {

                const { id } = props;
                
                const remove = async () => {
                    await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`);
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
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
            width: 50,
            filterable: false,
            align: 'center',
            disableColumnMenu: true,
            disableReorder: true,
        },
    ];

    return (
        <div className={classes.root}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
        />
            <NavLink exact to="/newproduct">
            <Button  className={classes.buttons}  variant="contained" color="primary">Create</Button>
            </NavLink>
            </div>
    )
}

export default ProductsGrid
