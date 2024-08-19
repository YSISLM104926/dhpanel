import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Badge from '@mui/material/Badge';
const AddPhoto = () => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const handleImageChange = (event: any) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file: any) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index: number) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

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
                            // {...register("id", { required: "Id is required" })}
                            />
                            {/* {errors?.weight && <p className='text-start text-red-500'>{errors.weight.message}</p>} */}
                        </FormControl>
                    </div>
                    <>
                        {selectedImages.length > 0 && (
                            <>
                                <div className='mt-12'>
                                    <Button variant="contained" color="success">Submit Image</Button>
                                </div>
                            </>
                        )
                        }
                    </>
                </Box>
            )}
        </Box>
    );
};

export default AddPhoto;
