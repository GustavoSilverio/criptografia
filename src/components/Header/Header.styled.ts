import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Header = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    width: '100%',
    display: 'flex',
	textAlign: 'center',

    justifyContent: 'center',
    fontSize: 20,
    padding: theme.spacing(4, 4, 2), 
    fontWeight: 700,
}))