import './App.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Link } from 'react-router-dom';
import TableData from './components/TableData';
const App = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <Card
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: 'lightgreen',
            "&:hover": {
              cursor: 'pointer',
              scale: '1.02',
              transition: '0.5s'
            }
          }}
        >
          <Link to='/add-item'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <NoteAddIcon />
              </Typography>
              <Typography>
                Add Items
              </Typography>
            </Box>
          </Link>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: 'lightgreen',
            "&:hover": {
              cursor: 'pointer',
              scale: '1.02',
              transition: '0.5s'
            }
          }}
        >
          <Link to='/add-inventory-details'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <NoteAddIcon />
              </Typography>
              <Typography>
                Inventory Details
              </Typography>
            </Box>
          </Link>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: 'lightgreen',
            "&:hover": {
              cursor: 'pointer',
              scale: '1.02',
              transition: '0.5s'
            }
          }}
        >
          <Link to='/add-photo'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <AddPhotoAlternateIcon />
              </Typography>
              <Typography>
                Add Photo
              </Typography>
            </Box>
          </Link>
        </Card>
        <Card
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: 'lightgreen',
            "&:hover": {
              cursor: 'pointer',
              scale: '1.02',
              transition: '0.5s'
            }
          }}
        >
          <Link to='/add-review'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography>
                <RateReviewIcon />
              </Typography>
              <Typography>
                Review
              </Typography>
            </Box>
          </Link>
        </Card>
      </div >
      <Box sx={{
        marginTop: '60px'
      }}>
        <TableData />
      </Box>
    </>
  )
}

export default App
