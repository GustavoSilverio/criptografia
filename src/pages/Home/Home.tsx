import * as Styled from './Home.styled'
import { Box, Typography, Switch } from '@mui/material'

export const Home = () => {

    interface InputProps {
        label: string
    }

    const InputFC = ({
        label
    }: InputProps) => {
        return (
            <Styled.Input>
                <Typography> {label} </Typography>

                <input type='text' />
            </Styled.Input>
        )
    }

    return (
        <Styled.Home>
            <Styled.Inputs>
                <Box className="switch">
                    <Typography> CRIP/DESC </Typography>
                    <Switch
                        size='medium'
                        color='secondary'
                    />
                </Box>

                <Box className="inputs">
                    <InputFC
                        label="Coloque sua frase"
                    />

                    <InputFC
                        label="Coloque sua chave"
                    />
                </Box>
            </Styled.Inputs>
        </Styled.Home>
    )
}