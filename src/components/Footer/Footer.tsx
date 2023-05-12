import { Typography } from '@mui/material';
import * as Styled from './Footer.styled'

export const Footer = () => {

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();

    return (
        <Styled.Footer>
            <Typography variant='h1'>
				{ano} © Gustavo Silvério & Breno Cardozo
			</Typography>
        </Styled.Footer>
    )
}