import { styled } from '@mui/material/styles'

export const Footer = styled('footer')(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',

    backgroundColor: theme.palette.primary.main,
    width: '100%',
    padding: theme.spacing(2, 1.25, 4),
	
	h1: {
		fontSize: 14,
		fontWeight: 700,
		color: theme.palette.secondary.main,
		textAlign: 'center',
	}
}))