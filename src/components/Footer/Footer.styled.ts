import { styled } from '@mui/material/styles'

export const Footer = styled('footer')(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',

    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: 14,
    fontWeight: 700,

    width: '100%',
    padding: theme.spacing(2, 1.25, 4)
}))