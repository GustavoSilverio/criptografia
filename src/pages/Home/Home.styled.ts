import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const Home = styled('main')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: 'calc(100vh - 198px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const Inputs = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
    flexDirection: 'column',

    ".switch": {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1)
    }
}))

export const Input = styled(Box)(({ theme }) => ({
    input: {
        border: `1px solid ${theme.palette.grey[100]}`,
        backgroundColor: 'transparent',
        borderRadius: 6,
        maxWidth: 360,
        width: '100%',
        padding: theme.spacing(2, 3)
    }
}))