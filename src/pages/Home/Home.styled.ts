import { styled } from '@mui/material/styles'
import { Box, Button, Stack } from '@mui/material'

export const Home = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: 'calc(100vh - 172.33px)',
    justifyContent: 'center',
	padding: theme.spacing(5),
	width: '100%',
}))

export const Inputs = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(3),
    flexDirection: 'column',
	maxWidth: 360,
	
	width: '100%',
	margin: theme.spacing(0, 'auto'),

    ".switch": {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1),
		color: theme.palette.grey[100],
    },

    ".inputs": {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3)
    },
}))

export const Input = styled(Box)(({ theme }) => ({
    color: theme.palette.grey[100],
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1.5),

	input: {
        border: `1px solid ${theme.palette.grey[100]}`,
        backgroundColor: 'transparent',
        borderRadius: 6,
        maxWidth: 360,
    
		width: '100%',
        padding: theme.spacing(2, 3),
		color: theme.palette.grey[100],
	}
}))

export const Botao = styled(Button)(({ theme }) => ({
	textTransform: "uppercase",
	backgroundColor: theme.palette.secondary.main,
	borderRadius: 6,
	maxWidth: 360,
	
	width: '100%',
	padding: theme.spacing(1.75 ,2.75),
	border: `2px solid ${theme.palette.secondary.main}`,
	
	"&:hover": {
		border: '2px solid rgba(209, 163, 0, 1)',
		backgroundColor: theme.palette.secondary.main,
	}
}))