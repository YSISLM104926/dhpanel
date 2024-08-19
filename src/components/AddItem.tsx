import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../redux/hook';
import { addProduct } from '../redux/feature/productSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
type FormValues = {
    id: string;
    productTitle: string;
    description: string;
    category: string;
    regularPrice: number;
    extraprice: number;
    taxAmount: number;
};

export const AddItem = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const dispatch = useAppDispatch();

    const onSubmit = handleSubmit((data) => {
        const id = uuidv4();
        const newData = { ...data, status: 'Out of Stock', id };
        console.log(newData);
        dispatch(addProduct(newData as any))
        toast.success('Item added successfully');
        navigate('/');
    });

    return (
        <Box>
            <Toaster />
            <form onSubmit={onSubmit}>
                <div>
                    <h1 className="text-start text-4xl mb-6 mt-16">ADD ITEM</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="producttitle">Product Title</InputLabel>
                        <OutlinedInput
                            id="producttitle"
                            type='text'
                            label="Product Title"
                            {...register("productTitle", { required: "Product Title is required" })}
                        />
                        {errors?.productTitle && <p className='text-start text-red-500'>{errors.productTitle.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <OutlinedInput
                            id="description"
                            type='text'
                            label="Description"
                            {...register("description", { required: "Description is required" })}
                        />
                        {errors?.description && <p className='text-start text-red-500'>{errors.description.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="category">Category</InputLabel>
                        <OutlinedInput
                            id="category"
                            type='text'
                            label="Category"
                            {...register("category", { required: "Category is required" })}
                        />
                        {errors?.category && <p className='text-start text-red-500'>{errors.category.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="regularprice">Regular Price</InputLabel>
                        <OutlinedInput
                            id="regularprice"
                            type='number'
                            label="Regular Price"
                            {...register("regularPrice", { required: "Regular Price is required", valueAsNumber: true })}
                        />
                        {errors?.regularPrice && <p className='text-start text-red-500'>{errors.regularPrice.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="extraprice">Extra Price</InputLabel>
                        <OutlinedInput
                            id="extraprice"
                            type='number'
                            label="Extra Price"
                            {...register("extraprice", { required: "Extra Price is required", valueAsNumber: true })}
                        />
                        {errors?.extraprice && <p className='text-start text-red-500'>{errors.extraprice.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="taxamount">Tax Amount</InputLabel>
                        <OutlinedInput
                            id="taxamount"
                            type='number'
                            label="Tax Amount"
                            {...register("taxAmount", { required: "Tax Amount is required", valueAsNumber: true })}
                        />
                        {errors?.taxAmount && <p className='text-start text-red-500'>{errors.taxAmount.message}</p>}
                    </FormControl>
                </div>
                <Button type="submit" sx={{ width: '100%', marginTop: '25px', paddingTop: '15px', paddingBottom: '15px' }} variant="contained">Submit</Button>
            </form>
        </Box>
    );
};
