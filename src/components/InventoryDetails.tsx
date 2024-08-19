import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../redux/hook';
import { getDataAndMerge } from '../redux/feature/productSlice';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';

type FormValues = {
    id: string;
    weight: number;
    length: number;
    height: number;
    width: number;
    totalstock: number;
};

interface IEType {
    id: string | undefined;
    error: boolean | undefined;
}

export const InventoryDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    const [ids, setIds] = useState<string | null>("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { products } = useSelector((state: RootState) => state.products);
    console.log('PRODUCTS', products);
    const existingProduct = products.find((product: any) => product.id === ids) as IEType;
    console.log('exist', existingProduct);
    const onSubmit = handleSubmit((data) => {
        console.log('Producctt', data);
        const productId = data.id;
        setIds(productId);
        if (existingProduct?.error === true) {
            console.error('Error: Product not found');
            toast.success('Product not found');
        } else {
            dispatch(getDataAndMerge(data));
            navigate('/');
            toast.success('Inventory Added Successfully');
        }

    });

    return (
        <Box>
            <form onSubmit={onSubmit}>
                <Toaster />
                <div>
                    <h1 className="text-start text-4xl mb-6 mt-16">ADD INVENTORY</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="id">ID</InputLabel>
                        <OutlinedInput
                            id="id"
                            type='text'
                            label="id"
                            {...register("id", { required: "Id is required" })}
                        />
                        {errors?.weight && <p className='text-start text-red-500'>{errors.weight.message}</p>}
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="weight">Weight</InputLabel>
                        <OutlinedInput
                            id="weight"
                            type='number'
                            label="weight"
                            {...register("weight", { required: "Weight is required" })}
                        />
                        {errors?.weight && <p className='text-start text-red-500'>{errors.weight.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="length">Length</InputLabel>
                        <OutlinedInput
                            id="length"
                            type='number'
                            label="length"
                            {...register("length", { required: "Length is required" })}
                        />
                        {errors?.length && <p className='text-start text-red-500'>{errors.length.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="height">Height</InputLabel>
                        <OutlinedInput
                            id="height"
                            type='number'
                            label="height"
                            {...register("height", { required: "Height is required" })}
                        />
                        {errors?.height && <p className='text-start text-red-500'>{errors.height.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="width">Width</InputLabel>
                        <OutlinedInput
                            id="width"
                            type='number'
                            label="width"
                            {...register("width", { required: "Width is required", valueAsNumber: true })}
                        />
                        {errors?.width && <p className='text-start text-red-500'>{errors.width.message}</p>}
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="totalstock">Total Stock </InputLabel>
                        <OutlinedInput
                            id="totalstock"
                            type='number'
                            label="Total Stock"
                            {...register("totalstock", { required: "Total Stock is required", valueAsNumber: true })}
                        />
                        {errors?.totalstock && <p className='text-start text-red-500'>{errors.totalstock.message}</p>}
                    </FormControl>
                </div>
                <Button type="submit" sx={{ width: '100%', marginTop: '25px', paddingTop: '15px', paddingBottom: '15px' }} variant="contained">Submit</Button>
            </form>
        </Box>
    );
};
