import { Button, Chip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { RootState } from '../redux/store';
import { deleteProduct, getSingleProduct } from '../redux/feature/productSlice';
import { useSelector } from 'react-redux';

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

interface ISingleDataType {
    id: any
}

export default function TableData() {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    useEffect(() => {
        dispatch(getSingleProduct(selectedId as any));
    }, [dispatch, selectedId]);
    const product = useSelector((state: RootState) => state.products.singleProduct) as any;
    const handleOpen = (id?: ISingleDataType) => {
        setOpen(true)
        setSelectedId(id as any);
        console.log('procu', product);
    };
    const handleDelete = (id?: any) => {
        dispatch(deleteProduct(id));
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const columns: GridColDef<(typeof data)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'productTitle',
            headerName: 'PRODUCT TITLE',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'DETAILS',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 150,
            renderCell: (params) => (
                <Chip sx={{ backgroundColor: '#E0F7F1', color: '#2EBF85', fontWeight: '600' }} label={params.value} />
            ),
            editable: true,
        },
        {
            field: 'category',
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
                    <Button onClick={() => handleOpen(params.id as any)}><MoreHorizIcon /></Button>
                </div>
            ),
        }
    ];

    let data = useAppSelector((state: RootState) => state.products.products)
    console.log(data);


    return (
        <Box>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
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
                            ID: {product?.id as any}
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Item Title: {product?.productTitle as any}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Details: {product?.description}
                        </Typography>
                        <div className='grid grid-cols-2 lg:grid-cols-4'>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Category: {product?.category}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Details: {product?.regularPrice}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Extra Price: {product?.extraprice}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Tax Amount: {product?.taxAmount}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Weight: {product?.weight}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Length: {product?.length}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                height: {product?.height}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Width: {product?.width}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Total Stock: {product?.totalstock}
                            </Typography>
                        </div>
                        <Box sx={{
                            marginTop: '10px'
                        }}>
                            <Button sx={{ backgroundColor: '#E0F7F1', color: '#2EBF85', fontWeight: '600' }} >Update</Button>
                            <Button onClick={() => handleDelete(product?.id as any)} sx={{ backgroundColor: '#F7E0E0', color: '#BF2E2E', fontWeight: '600', marginLeft: '15px' }} >Delete</Button>
                        </Box>
                    </Box>
                </Modal>
            </div>
        </Box>
    );
}
