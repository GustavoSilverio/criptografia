import { styled } from '@mui/material/styles'
import { Box, Button, Stack, Modal } from '@mui/material'

export const Home = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: 'calc(100vh - 172.33px)',
    justifyContent: 'center',
	padding: theme.spacing(5),
	width: '100%',
}))

export const Inputs = styled('form')(({ theme }) => ({
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
        gap: theme.spacing(3),
	},

	".resultado": {
		color: theme.palette.grey[100],
		maxWidth: 360,
		width: '100%',
		backgroundColor: 'rgb(40 40 40)',
		borderRadius: 8,
		padding: theme.spacing(3),
		overflowWrap: 'break-word',

		button: {
			backgroundColor: 'transparent',
			border: 'none',
			cursor: 'pointer',
			marginTop: theme.spacing(2),
			padding: 0,
			justifyContent: 'flex-start',
			
			span: {
				color: theme.palette.grey[100],
				fontSize: 20,
				display: 'flex',
			}
		},
	},

	".disabled": {
		display: 'none'
	}
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
		transition: 'border .1s ease',
		outline: 'none',

		"&::placeholder": {
			color: "rgb(86 86 83)",
			fontWeight: 500
		},

		"&:focus-visible": {
			border: '1px solid rgb(116, 91, 0, 1)',
		}
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

export const ModalWrapper = styled(Modal) (({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#fff',
	padding: theme.spacing(3),
	maxWidth: 346,
	width: '100%',
}))