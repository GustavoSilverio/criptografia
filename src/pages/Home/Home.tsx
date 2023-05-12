import { useState } from 'react';
import * as Styled from './Home.styled'
import { Box, Typography, Switch } from '@mui/material'

export const Home = () => {

	const [isDesc, setIsDesc] = useState(false);

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
						onChange={() => setIsDesc(!isDesc)}
                    />
                </Box>

                <Box className="inputs">
                    <InputFC
                        label={isDesc? "Coloque sua mensagem" : "Coloque sua frase"}
                    />

                    <InputFC
                        label="Coloque sua chave"
                    />

					<Styled.Botao>
						{isDesc? "Descriptografar" : "Criptografar"}
					</Styled.Botao>
                </Box>
            </Styled.Inputs>
        </Styled.Home>
    )
}