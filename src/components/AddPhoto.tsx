import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Badge from '@mui/material/Badge';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../redux/hook';
import { getDataAndMergeWithImage } from '../redux/feature/productSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toast } from 'sonner';
type FormValues = {
    id: string | undefined;
}
interface IEType {
    id: string | undefined;
    error: boolean | undefined;
}
const AddPhoto = () => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const [ids, setIds] = useState<string | undefined>("");
    const navigate = useNavigate();
    const handleImageChange = (event: any) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file: any) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index: number) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
    const { products } = useSelector((state: RootState) => state.products) as any;
    console.log('PRODUCTS', products);
    const existingProduct = products.find((product: any) => product.id === ids) as IEType;
    console.log('exist', existingProduct);
    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const id = data?.id;
        setIds(id);
        if (existingProduct?.error === true) {
            console.error('Error: Product not found');
            toast.success('Product not found');
        } else {
            dispatch(getDataAndMergeWithImage({ imageURL: { ...selectedImages }, id }))
            navigate('/');
            toast.success('Inventory Added Successfully');
        }
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Button variant="contained" component="label" tabIndex={-1}
                startIcon={<CloudUploadIcon />}>
                Upload Images
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    multiple
                    onChange={handleImageChange}
                />
            </Button>

            {selectedImages.length > 0 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mt={2} textAlign="center">
                        <Typography variant="subtitle1">Image Previews:</Typography>
                        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mt={2}>
                            {selectedImages.map((image, index) => (
                                <Badge badgeContent={'x'} sx={{
                                    ":hover": {
                                        cursor: 'pointer'
                                    }
                                }} key={index} color="primary" onClick={() => handleRemoveImage(index as any)}>
                                    <Box key={index} position="relative">
                                        <img
                                            src={image}
                                            alt={`Preview ${index}`}
                                            style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '0px' }}
                                        />
                                    </Box>
                                </Badge>
                            ))
                            }
                        </Box>
                        <div className='mt-12'>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="id">ID</InputLabel>
                                <OutlinedInput
                                    id="id"
                                    type='text'
                                    label="id"
                                    {...register("id", { required: "Id is required" })}
                                />
                                {/* {errors?.weight && <p className='text-start text-red-500'>{errors.weight.message}</p>} */}
                            </FormControl>
                        </div>

                        <>
                            <div className='mt-12'>
                                <Button type='submit' variant="contained" color="success">Submit Image</Button>
                            </div>
                        </>

                    </Box>
                </form>
            )}
        </Box>
    );
};

export default AddPhoto;
