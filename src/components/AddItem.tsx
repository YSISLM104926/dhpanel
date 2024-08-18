
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';


export const AddItem = () => {
    return (
        <Box>
            <div>
                <h1 className="text-start text-4xl mb-6 mt-16">ADD ITEM</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="producttitle">Product Title</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type='text'
                        label="producttitle"
                    />
                </FormControl>
                <FormControl  variant="outlined">
                    <InputLabel htmlFor="producttitle">Description</InputLabel>
                    <OutlinedInput
                        id="description"
                        type='text'
                        label="description"
                    />
                </FormControl>
                <FormControl  variant="outlined">
                    <InputLabel htmlFor="category">Category</InputLabel>
                    <OutlinedInput
                        id="category"
                        type='text'
                        label="category"
                    />
                </FormControl>
                <FormControl  variant="outlined">
                    <InputLabel htmlFor="regularprice">Regular Price</InputLabel>
                    <OutlinedInput
                        id="regularprice"
                        type='text'
                        label="regularprice"
                    />
                </FormControl>
                <FormControl  variant="outlined">
                    <InputLabel htmlFor="extraprice">Extra Price</InputLabel>
                    <OutlinedInput
                        id="extraprice"
                        type='text'
                        label="extraprice"
                    />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="taxamount">Tax Amount</InputLabel>
                    <OutlinedInput
                        id="taxamount"
                        type='text'
                        label="taxamount"
                    />
                </FormControl>
            </div>

            <Button sx={{ width: '100%', marginTop:'25px', paddingTop: '15px', paddingBottom: '15px' }} variant="contained">Submit</Button>

        </Box>
    );
}