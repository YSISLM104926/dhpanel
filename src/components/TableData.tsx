import { Button, Chip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TableData() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'productTitle',
            headerName: 'PRODUCT TITLE',
            width: 150,
            editable: true,
        },
        {
            field: 'details',
            headerName: 'DETAILS',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 150,
            renderCell: (params) => (
                <Chip label={params.value} variant="outlined" />
            ),
            editable: true,
        },
        {
            field: 'productCategory',
            headerName: 'PRODUCT CATEGORY',
            width: 220,
            editable: true,
        },
        {
            field: 'regularPrice',
            headerName: 'Regular Price',
            width: 150,
            editable: true,
        },
        {
            field: 'extraprice',
            headerName: 'Extra Price',
            width: 150,
            editable: true,
        },
        {
            field: 'delete',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <div>
                    <Button onClick={handleOpen}><MoreHorizIcon /></Button>
                </div>
            ),
        }
    ];

    const rows = [
        {
            id: 1, productTitle: 'Snow',
            details: 'Jon', status: 'In Stock',
            productCategory: 'ddddd', regularPrice: '$33',
            extraprice: '$35',
        },

    ];
    return (
        <Box>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    sx={{
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                    disableRowSelectionOnClick
                />
            </Box>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </Box>
    );
}
